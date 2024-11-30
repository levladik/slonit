const computer1 = () => {
  let number = Math.floor(Math.random() * 100);
  console.log(`Компьютер 1 загадал число ${number}`);

  return number;
};

const guestNumber = computer1();

const computer2 = (guestNumber) => {
  let left = 1;
  let right = 100;
  let mid;

  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;

    if (guestNumber === mid) {
      console.log(`Компьютер 2: ${mid}`);
      console.log("Компьютер 1: Угадал!");
      return mid;
    }
    if (guestNumber < mid) {
      right = mid - 1;
      console.log(`Компьютер 2: ${mid}`);
      console.log("Компьютер 1: Меньше");
    }
    if (guestNumber > mid) {
      left = mid + 1;
      console.log(`Компьютер 2: ${mid}`);
      console.log("Компьютер 1:Больше");
    }
  }
};

computer2(guestNumber);
