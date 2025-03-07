export interface IContent {
    id: string;
    photoUrl: string;
    title: string;
    description: string;
  }
  
  export const fakeData: IContent[] = [
    {
      id: '1',
      photoUrl: 'https://varejodemoda.com.br/wp-content/uploads/2024/06/semanas-de-moda-2024.webp',
      title: 'Resumo da semana de moda de Paris 2025',
      description: 'Confira os principais desfiles de primavera-verão da semana de moda de Paris 2025'
    },
    {
      id: '2',
      photoUrl: 'https://topview.com.br/wp-content/uploads/2024/10/image0-1.jpeg',
      title: 'Confira os melhores looks das famosas na semana de moda',
      description: 'Adriana Lima rouba cena no desfile da Versace'
    },
    {
      id: '3',
      photoUrl: 'https://hypnotique.com.br/wp-content/uploads/2024/06/Paris-Fashion-Week-2025-confira-o-calendario-completo-fabiola-kassin-hypnotique.webp',
      title: 'Veja as marcas que mais se destacaram em Paris 2025',
      description: 'Balenciaga, Miu Miu, entre outras'
    },
    {
      id: '4',
      photoUrl: 'https://blog.passaportefashionista.com/wp-content/uploads/2024/10/As-melhores-tendencias-da-Paris-Fashion-Week-SS25.webp',
      title: 'Confira as principais tendências da semana de moda de Paris',
      description: 'Escolha sua tendência favorita!',
    }
];