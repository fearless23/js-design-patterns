import { log } from '../log';
import { EventProcessor } from './basic'
import { EventProcessorAdvanced } from './advanced'

interface AuthEventsMap {
  login: {
    username: string;
    password: string;
    has_session?: boolean
  };
  logout: { username: string };
}

const test = () => {
  // const EV = new EventProcessor<AuthEventsMap>();
  // or
  class AuthEventProcessor extends EventProcessor<AuthEventsMap> { }
  const EV = new AuthEventProcessor()

  EV.add_filter('login', (t) => (t as any)?.password.length >= 8)
  EV.add_map('login', data => ({ ...data, has_session: Boolean(data.username) }))
  EV.add_map('logout', data => ({ ...data, logged_out_at: new Date().toISOString() }))

  EV.handle_event('login', { username: 'happy', password: 'abc123' })
  EV.handle_event('login', { username: 'jassi', password: 'abcd1234' })
  EV.handle_event('logout', { username: 'tom' })
  log('get_processed_events 1', EV.get_processed_events())
}

const test2 = () => {
  class AuthEventProcessor extends EventProcessorAdvanced<AuthEventsMap> { }
  const EV = new AuthEventProcessor();

  
  EV.add_handler({
    filter_login: (t) => (t as any)?.password.length >= 8,
    map_login: data => ({ ...data, has_session: Boolean(data.username) }),
  })

  EV.handle_event('login', { username: 'happy', password: 'abc123' })
  EV.handle_event('login', { username: 'jassi', password: 'abcd1234' })
  EV.handle_event('logout', { username: 'tom' })
  log('get_processed_events 1', EV.get_processed_events())
}

export default test2