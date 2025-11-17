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

// Create an instance
const gsxToy = new ToyCar({
  make: "Buick",
  model: "GSX",
  year: 1970,
  color: "Copper/Bronze",
  scale: "1/64",
  lengthInches: 3,
  bodyMaterial: "metal",
  chassisMaterial: "metal",
  tires: "real rubber",
  openableHood: true,
  sku: "RCSP027/24",
  transmission: "4-speed manual (real car)",
  horsepower: 350, // base
  torque: 510, // lb-ft
  _secret: "collector’s edition"
});

const addCarBtn = document.getElementById("add-car-btn");
const collection = document.getElementById("collection");

// Create & display car card
function createCarCard(car) {
  const card = document.createElement("div");
  card.className = "car-card";

  card.innerHTML = `
    <h3>${car.describe()}</h3>
    <p><b>Scale:</b> ${car.scale}</p>
    <p><b>Length:</b> ${car.lengthInches} inches</p>
    <p><b>Body:</b> ${car.bodyMaterial}</p>
    <p><b>Chassis:</b> ${car.chassisMaterial}</p>
    <p><b>Tires:</b> ${car.tires}</p>
    <p><b>Opening Hood:</b> ${car.openableHood}</p>
    <p><b>SKU:</b> ${car.sku}</p>
    <p><b>Transmission:</b> ${car.transmission}</p>
    <p><b>Horsepower:</b> ${car.horsepower}</p>
    <p><b>Torque:</b> ${car.torque}</p>
  `;

  collection.appendChild(card);
}

// Add car button event
addCarBtn.addEventListener("click", () => {
  const car = new ToyCar({
    make: document.getElementById("make").value,
    model: document.getElementById("model").value,
    year: Number(document.getElementById("year").value),
    color: document.getElementById("color").value,
    scale: document.getElementById("scale").value,
    lengthInches: Number(document.getElementById("length").value),
    bodyMaterial: document.getElementById("body").value,
    chassisMaterial: document.getElementById("chassis").value,
    tires: document.getElementById("tires").value,
    openableHood: document.getElementById("hood").checked,
    sku: document.getElementById("sku").value,
    transmission: document.getElementById("trans").value,
    horsepower: Number(document.getElementById("hp").value),
    torque: Number(document.getElementById("torque").value),
    _secret: document.getElementById("secret").value
  });

  createCarCard(car);
});