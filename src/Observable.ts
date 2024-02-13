// type alias
type Observer<T> = (data: T) => void;
class Observable<T> {
  // declaring private member
  private observers: Observer<T>[] = [];
  constructor() {}
  // This method allows external entities to subscribe
  // to the observable. It takes a function matching the
  //  Observer<T> type and adds it to the observers array.
  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  // This method allows subscribers to unsubscribe from
  // the observable. It takes a function matching the Observer<T>
  // type and removes it from the observers array.
  unsubscribe(observer: Observer<T>): void {
    this.observers.filter((subscriber) => subscriber !== observer);
  }

  // This method notifies all subscribed observers by invoking
  //  their functions with the provided data. It iterates over
  // the observers array and calls each function with the data parameter.
  notify(data: T): void {
    this.observers.forEach((observer) => observer(data));
  }
}
