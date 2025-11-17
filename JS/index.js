class ToyCar {
  constructor(options) {
    this.make = options.make; // e.g., "Buick"
    this.model = options.model; // "GSX"
    this.year = options.year; // 1970
    this.color = options.color; // "Copper/Bronze"
    this.scale = options.scale; // "1/64"
    this.lengthInches = options.lengthInches; // 3
    this.bodyMaterial = options.bodyMaterial; // "metal"
    this.chassisMaterial = options.chassisMaterial; // "metal" or "plastic"
    this.tires = options.tires; // e.g., "real rubber"
    this.openableHood = options.openableHood; // boolean
    this.sku = options.sku; // "RCSP027/24"
    this.transmission = options.transmission; // (this is real car detail)
    this.horsepower = options.horsepower; // number
    this.torque = options.torque; // number
    this._secret = options._secret; // maybe something private
  }

  // A method to describe the car
  describe() {
    return `This is a ${this.year} ${this.make} ${this.model} in ${this.color}, ` +
           `scale ${this.scale}, with an opening hood: ${this.openableHood}.`;
  }
}