// Commented out for performance

//export const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
//  return {
//    id: i,
//    isSelected: i === 29_999_998,
//  };
//});

export const shuffle = (users: string[]): string[] => {
  let currentIndex: number = users.length;

  while (currentIndex !== 0) {
    const randomIndex: number = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [users[currentIndex], users[randomIndex]] = [users[randomIndex], users[currentIndex]];
  }

  return users;
}
