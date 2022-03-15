// A: Event Map - object with key as method names
// B: Event Processor: handle Event from any given eventMap
// C: User Event Processor - A + B + map/filter

// Implementation 1 - Basic
// E = type of event map
type EventsFilterFunction<T> = (data: T[keyof T]) => boolean
type EventsMapFunction<T> = (data: T[keyof T]) => T[keyof T]

type Filters<T> = Record<keyof T, EventsFilterFunction<T>[]>
type Maps<T> = Record<keyof T, EventsMapFunction<T>[]>

type Processed<T> = {
  event_name: keyof T,
  data: T[keyof T]
}

export class EventProcessor<T> {
  private filters: Filters<T> = {} as Filters<T>;
  private maps: Maps<T> = {} as Maps<T>;
  private processed: Processed<T>[] = [];

  handle_event<K extends keyof T>(event_name: K, data: T[K]): void {
    // console.log(`eventName:${event_name} - data:${data}`)
    let allow_event = true;
    const f = this.filters[event_name] || [];
    for (const filter_func of f) {
      const allowed = filter_func(data)
      if (!allowed) {
        allow_event = false;
        break;
      }
    }

    // if filter: allowed based on that filter
    // if no filters: allowed

    // if map: data parsed by map func then stored in processed
    // if no map: data stored as is

    // if no filters & no maps: it goes to processed directly
    if (!allow_event) {
      console.error(`Event is not allowed`)
      return;
    }


    // Add to processed events
    let _data = { ...data } as T[keyof T];
    const m = this.maps[event_name] || [];
    for (const map_func of m) {
      _data = map_func(_data)
    }
    this.processed.push({
      event_name,
      data: _data
    })

  }

  add_filter<K extends keyof T>(event_name: K, filter: EventsFilterFunction<T>) {
    if (!this.filters[event_name]) this.filters[event_name] = []
    this.filters[event_name].push(filter)
  }

  add_map<K extends keyof T>(event_name: K, map: EventsMapFunction<T>) {
    if (!this.maps[event_name]) this.maps[event_name] = []
    this.maps[event_name].push(map)
  }

  get_processed_events() {
    return this.processed;
  }

}
