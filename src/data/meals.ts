export interface Meal {
  name: string;
  calories: number;
  ingredients: string[];
  preparation: string;
  image: string;
}

export interface DayMeals {
  day: string;
  dayName: string;
  breakfast: Meal;
  lunch: Meal;
  snack: Meal;
  dinner: Meal;
}

export const weeklyMeals: DayMeals[] = [
  {
    day: "monday",
    dayName: "Segunda-feira",
    breakfast: {
      name: "Ovos Mexidos com Abacate",
      calories: 420,
      ingredients: [
        "3 ovos orgânicos",
        "1 abacate médio",
        "2 colheres de sopa de manteiga",
        "Sal rosa e pimenta a gosto",
        "Cebolinha picada"
      ],
      preparation: "Bata os ovos em uma tigela. Aqueça a manteiga em fogo médio e adicione os ovos mexendo delicadamente. Sirva com fatias de abacate, tempere com sal rosa, pimenta e finalize com cebolinha.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ed78322a-a3b4-4e95-bf07-ee9fc42ea301.png"
    },
    lunch: {
      name: "Salmão Grelhado com Aspargos",
      calories: 520,
      ingredients: [
        "200g de filé de salmão",
        "200g de aspargos frescos",
        "3 colheres de sopa de azeite extra virgem",
        "2 dentes de alho",
        "Limão siciliano",
        "Ervas finas mistas"
      ],
      preparation: "Tempere o salmão com sal, pimenta e limão. Grelhe por 4 minutos cada lado. Refogue os aspargos com alho e azeite por 3 minutos. Finalize com ervas finas e gotas de limão.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a8c2755c-c8d2-424e-a1cb-7967695185fb.png"
    },
    snack: {
      name: "Mix de Castanhas e Azeitonas",
      calories: 280,
      ingredients: [
        "30g de castanha-do-pará",
        "20g de nozes",
        "15g de amêndoas",
        "50g de azeitonas verdes",
        "Azeite de oliva",
        "Orégano seco"
      ],
      preparation: "Combine todas as castanhas em uma tigela. Adicione as azeitonas e regue com um fio de azeite. Tempere com orégano e misture delicadamente. Sirva à temperatura ambiente.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/87c1593e-e246-48d9-b737-1e413d3dc3de.png"
    },
    dinner: {
      name: "Frango ao Curry com Couve-flor",
      calories: 480,
      ingredients: [
        "250g de peito de frango em cubos",
        "300g de couve-flor",
        "200ml de leite de coco",
        "2 colheres de chá de curry",
        "1 cebola média",
        "Gengibre fresco",
        "Coentro fresco"
      ],
      preparation: "Refogue a cebola e gengibre. Adicione o frango e doure. Acrescente o curry, leite de coco e couve-flor. Cozinhe por 15 minutos em fogo médio. Finalize com coentro fresco picado.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/093ca4cc-7fcd-484f-910e-9e54af130188.png"
    }
  },
  {
    day: "tuesday",
    dayName: "Terça-feira",
    breakfast: {
      name: "Iogurte Grego com Nozes",
      calories: 380,
      ingredients: [
        "200g de iogurte grego natural",
        "30g de nozes picadas",
        "1 colher de sopa de sementes de chia",
        "Canela em pó",
        "Extrato de baunilha",
        "Stevia a gosto"
      ],
      preparation: "Misture o iogurte com extrato de baunilha e stevia. Polvilhe as nozes e sementes de chia por cima. Finalize com uma pitada de canela. Sirva gelado.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7034a3a8-8cdc-458f-87d5-18bdb4651611.png"
    },
    lunch: {
      name: "Carne de Porco com Brócolis",
      calories: 550,
      ingredients: [
        "200g de lombo suíno",
        "250g de brócolis",
        "2 colheres de sopa de óleo de coco",
        "2 dentes de alho",
        "Molho de soja sem açúcar",
        "Gergelim torrado"
      ],
      preparation: "Corte a carne em fatias e tempere. Aqueça o óleo de coco e doure a carne. Adicione alho e brócolis, refogue por 5 minutos. Tempere com molho de soja e finalize com gergelim.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/138a9cd3-201f-4796-be53-cf01ced7d281.png"
    },
    snack: {
      name: "Abacate com Cacau",
      calories: 320,
      ingredients: [
        "1 abacate médio maduro",
        "2 colheres de sopa de cacau em pó",
        "1 colher de sopa de óleo de coco",
        "Stevia ou eritritol a gosto",
        "Pitada de sal",
        "Essência de baunilha"
      ],
      preparation: "Amasse o abacate com garfo. Misture cacau, óleo de coco derretido, adoçante, sal e baunilha. Bata até ficar cremoso. Sirva gelado como mousse.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6a17c707-b934-47a9-8aa9-11c220fe8bc6.png"
    },
    dinner: {
      name: "Peixe Assado com Abobrinha",
      calories: 460,
      ingredients: [
        "200g de filé de pescada",
        "2 abobrinhas médias",
        "3 colheres de sopa de azeite",
        "1 limão",
        "Alecrim fresco",
        "Tomate cereja",
        "Cebola roxa"
      ],
      preparation: "Tempere o peixe com limão, sal e alecrim. Corte as abobrinhas em fatias. Disponha tudo em assadeira com azeite, tomate e cebola. Asse a 200°C por 20 minutos.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ef37f9fe-1ef7-42d6-95cc-3f24d33e8037.png"
    }
  },
  {
    day: "wednesday",
    dayName: "Quarta-feira",
    breakfast: {
      name: "Omelete de Queijo e Espinafre",
      calories: 440,
      ingredients: [
        "3 ovos grandes",
        "100g de espinafre fresco",
        "80g de queijo mussarela",
        "2 colheres de sopa de manteiga",
        "1 tomate médio",
        "Sal e pimenta-do-reino"
      ],
      preparation: "Refogue o espinafre rapidamente. Bata os ovos e faça a omelete na manteiga. Adicione queijo e espinafre no centro, dobre ao meio. Sirva com fatias de tomate.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/93d6725a-5559-4615-b605-e24ad907dfa8.png"
    },
    lunch: {
      name: "Costela Suína com Couve",
      calories: 580,
      ingredients: [
        "250g de costela suína",
        "200g de couve manteiga",
        "2 dentes de alho",
        "1 cebola média",
        "Óleo de coco para refogar",
        "Cominho e páprica",
        "Caldo de osso"
      ],
      preparation: "Tempere a costela com especiarias. Doure em panela com óleo de coco. Adicione cebola, alho e caldo. Cozinhe por 40 minutos. Refogue a couve separadamente e sirva junto.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/602d9d0e-bd1d-48b2-ace6-238b47296f29.png"
    },
    snack: {
      name: "Fatias de Queijo com Azeitonas",
      calories: 300,
      ingredients: [
        "100g de queijo prato em fatias",
        "30g de azeitonas pretas",
        "1 colher de chá de azeite",
        "Orégano seco",
        "Pimenta vermelha em flocos",
        "Folhas de manjericão"
      ],
      preparation: "Disponha as fatias de queijo em um prato. Regue com azeite e polvilhe orégano e pimenta. Decore com azeitonas e folhas de manjericão fresco.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bacd89ce-7e51-468c-8c6a-f5f5c269205a.png"
    },
    dinner: {
      name: "Camarão na Manteiga com Alho",
      calories: 420,
      ingredients: [
        "300g de camarão grande limpo",
        "4 colheres de sopa de manteiga",
        "4 dentes de alho picados",
        "Salsinha fresca",
        "Pimenta calabresa",
        "Limão para finalizar",
        "Sal marinho"
      ],
      preparation: "Aqueça a manteiga em fogo médio. Adicione alho e camarão, refogue por 3 minutos. Tempere com sal, pimenta calabresa e finalize com salsinha e limão espremido.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dac63369-04e1-47a2-9be4-d78fd187a24a.png"
    }
  },
  {
    day: "thursday",
    dayName: "Quinta-feira",
    breakfast: {
      name: "Smoothie Verde Proteico",
      calories: 360,
      ingredients: [
        "1 abacate pequeno",
        "200ml de leite de coco",
        "1 punhado de espinafre",
        "1 scoop de whey protein",
        "1 colher de chá de óleo MCT",
        "Gelo a gosto",
        "Stevia natural"
      ],
      preparation: "Bata todos os ingredientes no liquidificador até ficar cremoso. Ajuste a doçura com stevia. Sirva imediatamente com gelo. Rico em gorduras boas e proteínas.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c0506932-a8a5-4117-95e7-eb5328bd545a.png"
    },
    lunch: {
      name: "Bife de Chorizo com Rúcula",
      calories: 560,
      ingredients: [
        "250g de bife de chorizo",
        "100g de rúcula fresca",
        "2 colheres de sopa de azeite",
        "1 limão siciliano",
        "Lascas de parmesão",
        "Sal grosso e pimenta",
        "Alho em lâminas"
      ],
      preparation: "Tempere o bife com sal grosso. Grelhe 3 minutos cada lado para mal passado. Faça salada com rúcula, azeite, limão e parmesão. Sirva o bife sobre a salada.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05963314-a09c-4cd3-8002-e44f540e341e.png"
    },
    snack: {
      name: "Pasta de Abacate com Ovos",
      calories: 340,
      ingredients: [
        "1 abacate maduro",
        "2 ovos cozidos",
        "1 colher de chá de limão",
        "Sal rosa a gosto",
        "Pimenta-do-reino",
        "Cebolinha picada",
        "Azeite para regar"
      ],
      preparation: "Amasse o abacate com limão e sal. Pique os ovos cozidos grosseiramente. Misture tudo, tempere com pimenta e cebolinha. Regue com azeite antes de servir.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5b5d3d56-f976-4d2c-a75c-13b310dc7bff.png"
    },
    dinner: {
      name: "Frango Assado com Batata-doce",
      calories: 510,
      ingredients: [
        "200g de coxa de frango",
        "150g de batata-doce roxa",
        "2 colheres de sopa de óleo de coco",
        "Alecrim e tomilho",
        "1 cebola em gomos",
        "Sal marinho e páprica",
        "Limão para temperar"
      ],
      preparation: "Tempere o frango com ervas, sal e páprica. Corte a batata-doce em cubos. Asse tudo junto com óleo de coco e cebola a 180°C por 35 minutos. Finalize com limão.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/193e2959-9582-4065-be64-ceae9f190216.png"
    }
  },
  {
    day: "friday",
    dayName: "Sexta-feira",
    breakfast: {
      name: "Panqueca de Coco Low Carb",
      calories: 400,
      ingredients: [
        "3 ovos",
        "3 colheres de sopa de farinha de coco",
        "2 colheres de sopa de creme de leite",
        "1 colher de chá de óleo de coco",
        "Canela em pó",
        "Eritritol a gosto",
        "Essência de baunilha"
      ],
      preparation: "Bata todos os ingredientes até formar massa lisa. Aqueça óleo de coco na frigideira. Faça panquecas pequenas, doure dos dois lados. Sirva quente com canela polvilhada.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1366a018-612f-45c1-a078-7c7dd38988e5.png"
    },
    lunch: {
      name: "Salmão com Purê de Couve-flor",
      calories: 540,
      ingredients: [
        "200g de salmão fresco",
        "300g de couve-flor",
        "3 colheres de sopa de manteiga",
        "100ml de creme de leite",
        "Endro fresco",
        "Limão siciliano",
        "Sal e pimenta branca"
      ],
      preparation: "Cozinhe a couve-flor e bata com manteiga e creme até formar purê. Grelhe o salmão temperado com sal, pimenta e limão. Sirva sobre o purê com endro fresco.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/877f0e3b-64d1-481f-abe4-2c2dec1c4d00.png"
    },
    snack: {
      name: "Bombom de Coco Proteico",
      calories: 280,
      ingredients: [
        "100g de coco ralado",
        "2 colheres de sopa de óleo de coco",
        "1 scoop de whey protein baunilha",
        "1 colher de chá de cacau",
        "Stevia a gosto",
        "Essência de coco"
      ],
      preparation: "Misture todos os ingredientes até formar massa homogênea. Modele bolinhas pequenas. Leve à geladeira por 30 minutos para firmar. Mantenha refrigerado.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f39458c1-52cb-4b2f-b246-f1cdb800ba2b.png"
    },
    dinner: {
      name: "Carne Moída com Abobrinha",
      calories: 490,
      ingredients: [
        "250g de carne moída",
        "2 abobrinhas médias",
        "1 cebola picada",
        "2 dentes de alho",
        "Molho de tomate sem açúcar",
        "Manjericão fresco",
        "Azeite para refogar"
      ],
      preparation: "Refogue cebola e alho no azeite. Adicione a carne moída e doure. Acrescente abobrinha em cubos e molho de tomate. Cozinhe por 10 minutos. Finalize com manjericão.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dbace321-833c-4f68-823b-c52d326ea4bc.png"
    }
  },
  {
    day: "saturday",
    dayName: "Sábado",
    breakfast: {
      name: "Bacon com Ovos Pochê",
      calories: 480,
      ingredients: [
        "4 fatias de bacon artesanal",
        "2 ovos frescos",
        "1 colher de sopa de vinagre",
        "Rúcula para acompanhar",
        "Tomate cereja",
        "Sal e pimenta",
        "Azeite extra virgem"
      ],
      preparation: "Frite o bacon até crocante. Faça ovos pochê em água com vinagre. Monte o prato com rúcula, tomate cereja, bacon e ovo pochê por cima. Tempere com sal, pimenta e azeite.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/280c2fe8-132c-4989-a3cd-eeaf93f2395f.png"
    },
    lunch: {
      name: "Costela de Porco BBQ",
      calories: 620,
      ingredients: [
        "300g de costela de porco",
        "2 colheres de sopa de mostarda dijon",
        "Páprica defumada",
        "Alho em pó",
        "Cebola em pó",
        "Sal defumado",
        "Azeite para pincelar"
      ],
      preparation: "Tempere a costela com todos os temperos secos e mostarda. Deixe marinar por 2 horas. Asse em forno baixo (150°C) por 2 horas, pincelando com azeite ocasionalmente.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a4f4ce6e-da74-4228-927e-6215aa618b93.png"
    },
    snack: {
      name: "Chips de Queijo Assado",
      calories: 320,
      ingredients: [
        "150g de queijo parmesão ralado",
        "Páprica doce",
        "Orégano seco",
        "Pimenta-do-reino",
        "Alecrim picado",
        "Opcional: sementes de gergelim"
      ],
      preparation: "Espalhe o queijo ralado em formas forradas com silpat. Tempere com especiarias. Asse a 180°C por 8-10 minutos até dourar. Deixe esfriar para ficar crocante.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8e56a332-f594-4042-b3d9-540d3963e8d8.png"
    },
    dinner: {
      name: "Linguiça de Frango com Pimentões",
      calories: 450,
      ingredients: [
        "200g de linguiça de frango",
        "1 pimentão vermelho",
        "1 pimentão amarelo",
        "1 cebola grande",
        "2 colheres de sopa de azeite",
        "Pimenta biquinho",
        "Salsinha picada"
      ],
      preparation: "Corte a linguiça em rodelas e doure. Refogue cebola e pimentões em fatias no azeite. Misture com a linguiça, adicione pimenta biquinho. Cozinhe por 8 minutos e finalize com salsinha.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0fc0fa7-02a1-468f-b084-9ee88d0a683f.png"
    }
  },
  {
    day: "sunday",
    dayName: "Domingo",
    breakfast: {
      name: "Torrada de Abacate Supreme",
      calories: 450,
      ingredients: [
        "2 fatias de pão low carb",
        "1 abacate grande maduro",
        "2 ovos",
        "Queijo cottage",
        "Tomate cereja",
        "Sal rosa e lime",
        "Sementes de girassol"
      ],
      preparation: "Toste o pão. Amasse o abacate com lime e sal rosa. Frite os ovos. Monte as torradas com queijo cottage, abacate amassado, ovo frito e tomate cereja. Finalize com sementes.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2eba4a47-d209-46e9-ba79-ad7a91b4b7ec.png"
    },
    lunch: {
      name: "Picanha na Brasa com Vinagrete",
      calories: 580,
      ingredients: [
        "250g de picanha em fatias",
        "1 tomate grande",
        "1 cebola roxa",
        "1 pimentão verde",
        "Vinagre de maçã",
        "Azeite extra virgem",
        "Coentro e cebolinha",
        "Sal grosso para a carne"
      ],
      preparation: "Tempere a picanha apenas com sal grosso. Grelhe na brasa ou frigideira bem quente. Prepare vinagrete com vegetais picados, vinagre, azeite e ervas. Sirva a carne com vinagrete.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e9d64641-a468-4e87-b8ff-f87c74f4b7f6.png"
    },
    snack: {
      name: "Mousse de Chocolate 70%",
      calories: 340,
      ingredients: [
        "100g de chocolate 70% cacau",
        "3 gemas de ovo",
        "200ml de creme de leite fresco",
        "2 colheres de sopa de eritritol",
        "1 colher de chá de baunilha",
        "Pitada de sal"
      ],
      preparation: "Derreta o chocolate em banho-maria. Bata as gemas com eritritol até esbranquiçar. Misture chocolate morno às gemas. Bata o creme de leite e incorpore delicadamente. Geladeira por 2 horas.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6b2b4e14-4d8c-4b4a-83c6-44d9b14e4c75.png"
    },
    dinner: {
      name: "Robalo Assado com Ervas",
      calories: 420,
      ingredients: [
        "200g de filé de robalo",
        "Azeite extra virgem",
        "Limão siciliano",
        "Alecrim fresco",
        "Tomilho fresco",
        "Sal marinho",
        "Aspargos verdes",
        "Tomate uva"
      ],
      preparation: "Tempere o robalo com sal, limão e ervas frescas. Disponha em assadeira com aspargos e tomate uva. Regue com azeite generosamente. Asse a 200°C por 18 minutos.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4b7878f6-a2bd-4413-8a72-62d34a0ade97.png"
    }
  }
];

export const getDayMeals = (day: string): DayMeals | undefined => {
  return weeklyMeals.find(meal => meal.day === day);
};

export const getAllDays = () => {
  return weeklyMeals.map(meal => ({
    day: meal.day,
    dayName: meal.dayName,
    image: meal.breakfast.image // Use breakfast image for day banner
  }));
};