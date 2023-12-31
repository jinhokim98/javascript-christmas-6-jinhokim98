import EventPlanner from './controller/EventPlanner.js';
import EventStatistics from './EventStatistics.js';

class App {
  #eventStatistics;

  constructor() {
    this.#eventStatistics = new EventStatistics();
  }

  async run() {
    await EventPlanner.prototype.init(this.#eventStatistics);
  }
}

export default App;
