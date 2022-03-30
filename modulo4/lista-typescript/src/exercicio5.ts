export const exercicio5 = () => {
  [
    { name: 'Rogério', email: 'roger@email.com', role: 'user' },
    { name: 'Ademir', email: 'ademir@email.com', role: 'admin' },
    { name: 'Aline', email: 'aline@email.com', role: 'user' },
    { name: 'Jéssica', email: 'jessica@email.com', role: 'user' },
    { name: 'Adilson', email: 'adilson@email.com', role: 'user' },
    { name: 'Carina', email: 'carina@email.com', role: 'admin' },
  ];

  enum ROLE {
    USER = 'user',
    ADMIN = 'admin',
  }

  type User = {
    name: string;
    email: string;
    role: ROLE;
  };

  const emailDosAdmin = (user: User[]): string[] => {
    let emails: string[] = [];
    user.filter((person) => {
      if (person.role === 'admin') {
        emails.push(person.email);
        return emails;
      }
    });
    console.log(emails);

    return emails;
  };

  emailDosAdmin([
    { name: 'Rogério', email: 'roger@email.com', role: ROLE.USER },
    { name: 'Ademir', email: 'ademir@email.com', role: ROLE.ADMIN },
    { name: 'Aline', email: 'aline@email.com', role: ROLE.USER },
    { name: 'Jéssica', email: 'jessica@email.com', role: ROLE.USER },
    { name: 'Adilson', email: 'adilson@email.com', role: ROLE.USER },
    { name: 'Carina', email: 'carina@email.com', role: ROLE.ADMIN },
  ]);
};
