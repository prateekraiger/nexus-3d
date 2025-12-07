export interface AnimeContent {
  title: string;
  posterUrl: string;
  category: string;
  rating: number;
  review: string;
  genre: string[];
}

export const animeData: AnimeContent[] = [
  {
    title: "Death Note",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FtCZFfYTIwrR7n94J6G14Y4hAFU6.jpg",
    category: "Anime",
    rating: 8.9,
    review:
      "Psychological thriller at its best. The cat and mouse game between Light and L is absolutely captivating.",
    genre: ["Crime", "Drama", "Fantasy"],
  },
  {
    title: "One Piece",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FcMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
    category: "Anime",
    rating: 9.0,
    review:
      "Epic adventure with amazing world-building. The character development and emotional moments are incredible.",
    genre: ["Action", "Adventure", "Comedy"],
  },
  {
    title: "Attack on Titan",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FhqRb1wyIVsaMukZElPBUXoJPqrR.jpg",
    category: "Anime",
    rating: 9.2,
    review:
      "Epic storytelling with incredible animation. The plot twists are mind-blowing and the characters are well-developed.",
    genre: ["Action", "Drama", "Fantasy"],
  },
  {
    title: "Naruto",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FxppeysfvDKVx775MFuH8Z9BlpMk.jpg",
    category: "Anime",
    rating: 8.7,
    review:
      "Classic ninja adventure with incredible character growth. Naruto's journey from outcast to hero is inspiring and emotional.",
    genre: ["Action", "Adventure", "Martial Arts"],
  },
  {
    title: "Solo Levelling",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fa7i9OdTUo9jZ1XoraCRIQNJ6ACX.jpg",
    category: "Anime",
    rating: 9.1,
    review:
      "Outstanding adaptation with incredible animation. The power progression and world-building are phenomenal.",
    genre: ["Action", "Fantasy", "Supernatural"],
  },
  {
    title: "One Punch Man",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FjbYJuxfZMpYDalkiOnBcCv9TaL.jpg",
    category: "Anime",
    rating: 8.8,
    review:
      "Perfect blend of comedy and action. Saitama's existential crisis about being too powerful is brilliantly executed.",
    genre: ["Action", "Comedy", "Superhero"],
  },
  {
    title: "Hunter x Hunter",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fi2EEr2uBvRlAwJ8d8zTG2Y19mIa.jpg",
    category: "Anime",
    rating: 9.3,
    review:
      "Complex storytelling with incredible character development. The Chimera Ant arc is a masterpiece of anime.",
    genre: ["Action", "Adventure", "Fantasy"],
  },
  {
    title: "Demon Slayer",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FxUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    category: "Anime",
    rating: 8.6,
    review:
      "Stunning animation with great fight scenes. The story is engaging and the characters are likeable.",
    genre: ["Action", "Animation", "Drama"],
  },
  {
    title: "Bleach",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F7bSQNQuhHeInFMfzMwevfCiqcTm.jpg",
    category: "Anime",
    rating: 8.2,
    review:
      "For as long as he can remember, Ichigo Kurosaki has been able to see ghosts. But when he meets Rukia, a Soul Reaper who battles evil spirits known as Hollows, he finds his life is changed forever. Now, with a newfound wealth of spiritual energy, Ichigo discovers his true calling: to protect the living and the dead from evil.",
    genre: ["Action", "Fantasy", "Martial Arts"],
  },
  {
    title: "Vinland Saga",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FvUHlpA5c1NXkds59reY3HMb4Abs.jpg",
    category: "Anime",
    rating: 9.1,
    review:
      "Epic historical drama about Vikings. Thorfinn's character development from revenge to redemption is beautiful.",
    genre: ["Historical", "Drama", "Action"],
  },
  {
    title: "Mob Psycho 100",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FvR7hwaGQ0ySRoq1WobiNRaPs4WO.jpg",
    category: "Anime",
    rating: 8.9,
    review:
      "Unique animation style with deep emotional storytelling. Mob's journey of self-discovery is incredibly touching.",
    genre: ["Supernatural", "Comedy", "Drama"],
  },
  {
    title: "Haikyuu!!",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F8WEr48swcqe89Zsy5sdrGCASlIg.jpg",
    category: "Anime",
    rating: 8.8,
    review:
      "The best sports anime ever made. Every match is intense and the character development is phenomenal.",
    genre: ["Sports", "School", "Drama"],
  },
  {
    title: "Black Clover",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FixM7N62bjtu5PGr1Tq3wuBbELxX.jpg",
    category: "Anime",
    rating: 8.2,
    review:
      "Underrated shonen with great magic system. Asta's determination and the squad dynamics are engaging.",
    genre: ["Action", "Magic", "Adventure"],
  },
  {
    title: "Dr. Stone",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FxbZQ3fDl0y5mt0ARwfeyrgQ4JTw.jpg",
    category: "Anime",
    rating: 8.4,
    review:
      "Educational and entertaining. The scientific approach to rebuilding civilization is fascinating and fun.",
    genre: ["Sci-Fi", "Adventure", "Educational"],
  },
  {
    title: "Assassination Classroom",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FwOd98jDHkoWy2LZ4gSy67X1ihv1.jpg",
    category: "Anime",
    rating: 8.6,
    review:
      "Unique premise with surprising emotional depth. Koro-sensei is one of the best teachers in anime.",
    genre: ["Comedy", "School", "Action"],
  },
  {
    title: "Detective Conan",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F1o2o7RELi8rtRrTh8iHYkprpDrn.jpg",
    category: "Anime",
    rating: 8.3,
    review:
      "Classic mystery series with clever cases. Conan's deductive skills and the overarching plot are captivating.",
    genre: ["Mystery", "Detective", "Adventure"],
  },
  {
    title: "Spy x Family",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F3r4LYFuXrg3G8fepysr4xSLWnQL.jpg",
    category: "Anime",
    rating: 8.5,
    review:
      "Wholesome family comedy with spy elements. Anya's telepathic antics and family dynamics are adorable.",
    genre: ["Comedy", "Family", "Action"],
  },
  {
    title: "Pluto",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fagf5sETjlO35s3EDA7wwGliZ5UW.jpg",
    category: "Anime",
    rating: 9.2,
    review:
      "Mature sci-fi masterpiece exploring AI consciousness. Dark, philosophical, and beautifully animated.",
    genre: ["Sci-Fi", "Drama", "Mystery"],
  },
  {
    title: "Chainsaw Man",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FnpdB6eFzizki0WaZ1OvKcJrWe97.jpg",
    category: "Anime",
    rating: 8.4,
    review:
      "Dark and chaotic with incredible animation. Denji's simple desires contrast beautifully with the horror.",
    genre: ["Action", "Horror", "Supernatural"],
  },
  {
    title: "Dandadan",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Ftaldr3CiOuHFC5kpxJoN34wLzqL.jpg",
    category: "Anime",
    rating: 8.6,
    review:
      "Wild supernatural comedy with amazing animation. The perfect blend of aliens, ghosts, and teenage chaos.",
    genre: ["Supernatural", "Comedy", "Action"],
  },
  {
    title: "Mashle",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fj4uI3VfubinCGzatlZcRcjrLyZ1.jpg",
    category: "Anime",
    rating: 8.1,
    review:
      "Harry Potter meets One Punch Man. Mash's muscle magic in a world of wizards is hilariously entertaining.",
    genre: ["Comedy", "Magic", "School"],
  },
  {
    title: "Fire Force",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FAlx1QJZeiweoM0ZVSnJ7PnuqPQx.jpg",
    category: "Anime",
    rating: 8.2,
    review:
      "Unique fire-based powers with great animation. The world-building and mystery elements are engaging.",
    genre: ["Action", "Supernatural", "Firefighting"],
  },
  {
    title: "Cyberpunk: Edgerunners",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F7jSWOc6jWSw5hZ78HB8Hw3pJxuk.jpg",
    category: "Anime",
    rating: 8.8,
    review:
      "Stunning cyberpunk animation with emotional depth. David's story is tragic and beautifully told.",
    genre: ["Sci-Fi", "Action", "Cyberpunk"],
  },
  {
    title: "Tokyo Revengers",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FarB3L9pZZBSzUPSC8BEv8c3X0bF.jpg",
    category: "Anime",
    rating: 8.3,
    review:
      "Time travel delinquent story with heart. Takemichi's determination to save his friends is compelling.",
    genre: ["Time Travel", "Drama", "Action"],
  },
  {
    title: "Blue Lock",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FsTDTy73OYmKY51EK94Mc6AxogzR.jpg",
    category: "Anime",
    rating: 8.4,
    review:
      "High school soccer players from across Japan gather for a controversial project designed to create the best and most egoistic striker in the world.",
    genre: ["Animation", "Drama", "Sport", "Thriller"],
  },
  {
    title: "Kuroko's Basketball",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FdMARTbYFPmoxPqNySiRrhl53vau.jpg",
    category: "Anime",
    rating: 7.4,
    review:
      "In the story, Kagami Taiga has just enrolled into Seirin High School when he meets Kuroko Tetsuya of the school's basketball team. Kuroko happens to be the shadowy sixth member of the legendary Generation of Miracles basketball team. Together, Kagami and Kuroko aim to take their team to the inter-high school championship - against Kuroko's former teammates.",
    genre: ["Comedy", "Anime", "Drama", "Sport"],
  },
  {
    title: "Kaiju No. 8",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FbJxGs0w5RAhaX4fIUQu511rvm0S.jpg",
    category: "Anime",
    rating: 8.6,
    review:
      "In a world plagued by creatures known as Kaiju, Kafka Hibino aspired to enlist in The Defense Force. He makes a promise to enlist with his childhood friend, Mina Ashiro. Soon, life takes them in separate ways. While employed cleaning up after Kaiju battles, Kafka meets Reno Ichikawa. Reno's determination to join The Defense Force reawakens Kafka's promise to join Mina and protect humanity.",
    genre: ["Anime", "Animation", "Action", "Adventure"],
  },
  {
    title: "Sakamoto Days",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FlBOHMPWetQprntjjtGquHwIHSvx.jpg",
    category: "Anime",
    rating: 7.4,
    review:
      "Once the world's most feared hitman, Taro Sakamoto falls in love with Store Clerk Aoi. Leaving his violent past, he retires to live a peaceful life. But old enemies threaten to pull him back into the life he thought he'd left for good.",
    genre: ["Animation", "Comedy", "Action", "Adventure"],
  },
  {
    title: "Lupin the Third",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FaywOqgw5opNykCW4R8os1liPVnq.jpg",
    category: "Anime",
    rating: 7.8,
    review:
      "Lupin the 3rd, The World's Greatest thief, who's proud of being the grandson of the infamous French thief: Arsene Lupin. Accompanied by his comrades who help him pull off the biggest heists in thievery history.",
    genre: ["Action", "Adventure", "Comedy", "Crime"],
  },
  {
    title: "Black Butler",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FiXGs130TRoUplHf0o86zp9MqAYc.jpg",
    category: "Anime",
    rating: 7.6,
    review:
      "Ciel Phantomhive takes care of the many unsettling events in Victorian England. Aided by Sebastian Michaelis, his loyal butler with seemingly inhuman abilities. But is there more to this black-clad butler than meets the eye?",
    genre: ["Horror", "Thriller", "Fantasy"],
  },
];
