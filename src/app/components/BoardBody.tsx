export default function BoardBody() {
  const cardData = [
    {
      cardItem: "to-do",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
          <path
            fill="currentcolor"
            d="M8.062 11 6.5 9.914A1 1 0 0 1 7.914 8.5l2.616 2.616c.28.167.47.5.47.884s-.19.717-.47.884L7.914 15.5A1 1 0 1 1 6.5 14.086L8.062 13h-3.68c-.487 0-.882-.448-.882-1s.395-1 .882-1zm5.408 1.884c-.28-.167-.47-.5-.47-.884s.19-.717.47-.884L16.086 8.5A1 1 0 0 1 17.5 9.914L15.938 11h3.68c.487 0 .882.448.882 1s-.395 1-.882 1h-3.68l1.562 1.086a1 1 0 0 1-1.414 1.414z"
          ></path>
        </svg>
      ),
    },
    {
      cardItem: "doing",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
          <path
            fill="currentcolor"
            d="M8.062 11 6.5 9.914A1 1 0 0 1 7.914 8.5l2.616 2.616c.28.167.47.5.47.884s-.19.717-.47.884L7.914 15.5A1 1 0 1 1 6.5 14.086L8.062 13h-3.68c-.487 0-.882-.448-.882-1s.395-1 .882-1zm5.408 1.884c-.28-.167-.47-.5-.47-.884s.19-.717.47-.884L16.086 8.5A1 1 0 0 1 17.5 9.914L15.938 11h3.68c.487 0 .882.448.882 1s-.395 1-.882 1h-3.68l1.562 1.086a1 1 0 0 1-1.414 1.414z"
          ></path>
        </svg>
      ),
    },
    {
      cardItem: "done",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
          <path
            fill="currentcolor"
            d="M8.062 11 6.5 9.914A1 1 0 0 1 7.914 8.5l2.616 2.616c.28.167.47.5.47.884s-.19.717-.47.884L7.914 15.5A1 1 0 1 1 6.5 14.086L8.062 13h-3.68c-.487 0-.882-.448-.882-1s.395-1 .882-1zm5.408 1.884c-.28-.167-.47-.5-.47-.884s.19-.717.47-.884L16.086 8.5A1 1 0 0 1 17.5 9.914L15.938 11h3.68c.487 0 .882.448.882 1s-.395 1-.882 1h-3.68l1.562 1.086a1 1 0 0 1-1.414 1.414z"
          ></path>
        </svg>
      ),
    },
  ];

  const cardList = cardData.map((card) => (
    <div key={card.cardItem} className="flex">
      <div key={card.cardItem} className="">
        {card.cardItem}
      </div>
      {card.icon}
    </div>
  ));

  return (
    <div className="bg-[#004080] h-screen">
      <div>
        <div className="flex w-11/12 justify-between items-center mx-auto">
          {cardList}
        </div>
      </div>
    </div>
  );
}
