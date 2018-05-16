const barker = ({ name }) => ({
  bark: () => 'Woof, I am ' + name
});

const driver = ({ position, speed }) => ({
  drive: () => position = position + speed
});

console.log(barker({ name: 'karo' }).bark());

const murderRobotDog = ({ name, speed = 100, position = 0 }) => {
  let state = { name, speed, position };

  return Object.assign(
    {},
    barker(state),
    driver(state)
  )
};

console.log(murderRobotDog({ name: 'sniffles' }).bark());
console.log(murderRobotDog({ name: 'murder', position: 50 }).drive());
