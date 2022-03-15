// This is advanced version of ./basic.ts
// Implementation 2 - Advanced
// only difference is adding add_handler method

type EventsFilterFunction<T> = (data: T[keyof T]) => boolean
type EventsMapFunction<T> = (data: T[keyof T]) => T[keyof T]

type Filters<T> = Record<keyof T, EventsFilterFunction<T>[]>
type Maps<T> = Record<keyof T, EventsMapFunction<T>[]>

type Processed<T> = {
  event_name: keyof T,
  data: T[keyof T]
}


// Implementation 2 - Advanced
// only the handler - add_handler is advanced version
// make sure Handler<T> have ?, otherwise we will need all possible combos
// if T = { login, logout }
// then Handler<T> without ? = { map_login, map_logout, filter_login, filter_logout }
// then Handler<T> with ? = { map_login?, map_logout?, filter_login?, filter_logout? }
type Handler<T> = {
  [K in keyof T as `map_${string & K}`]?: EventsMapFunction<T>
} &
  {
    [K in keyof T as `filter_${string & K}`]?: EventsFilterFunction<T>
  }

export class EventProcessorAdvanced<T> {
  private handlers: Handler<T>[] = []
  private filters: Filters<T> = {} as Filters<T>;
  private maps: Maps<T> = {} as Maps<T>;
  private processed: Processed<T>[] = [];

  handle_event<K extends keyof T>(event_name: K, data: T[K]): void {
    let allow_event = true;
    for (const handler of this.handlers) {
      // handler[0] = { filter_login, filter_logout }
      // handler[1] = { map_login, map_logout }
      // co-orcesion needs as keyof Handler<T>, nothing else worked
      const key = `filter_${event_name}` as keyof Handler<T>
      const filter_func = handler[key];
      if (filter_func && !filter_func(data)) {
        allow_event = false;
        break;
      }

    }
    if (!allow_event) {
      console.error(`Event is not allowed`)
      return;
    }
    // Add to processed events
    let _data = { ...data } as T[keyof T];
    for (const handler of this.handlers) {
      const key = `map_${event_name}` as keyof Handler<T>
      const map_func = handler[key];
      if (map_func) _data = map_func(data);
    }
    this.processed.push({
      event_name,
      data: _data
    })

  }

  add_handler(handler: Handler<T>) {
    this.handlers.push(handler)
  }

  get_processed_events() {
    return this.processed;
  }
}