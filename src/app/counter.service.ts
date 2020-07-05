export class CounterService {
  changeCounters = {
    activeToInactive: 0,
    inactiveToActive: 0
  };

  increment(activity) {
    this.changeCounters[activity]++;
    console.log(`${activity === 'activeToInactive' ? 
      'Active -> Inactive conversions: '
     :'Inactive -> Active conversions: '}`
      + this.changeCounters[activity]);
  }
}