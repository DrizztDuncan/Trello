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
      cards: [
        { title: "This is a card! 👋 Select it to see its card back." },
        { title: "Hold and drag to move this card to another list 👉" },
        {
          title:
            "Invite collaborators to your board by selecting the menu to the right of the notifications bell.",
        },
      ],
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
      cards: [
        { title: "This card has an attachment." },
        { title: "This card has a label and a checklist." },
      ],
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
      cards: [{ title: "Signed up for Trello" }],
    },
  ];

  const cardList = cardData.map((card) => (
    <div
      key={card.cardItem}
      className="flex flex-col w-1/5 bg-black justify-between px-3 py-4 rounded-lg mx-2"
    >
      <div className="flex items-center mb-4">
        <div className="mr-2 text-white font-semibold">{card.cardItem}</div>
        <div>{card.icon}</div>
      </div>
      <div className="flex flex-col space-y-2">
        {card.cards.map((cardDetail, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded p-2 text-sm"
          >
            {cardDetail.title}
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="bg-[#004080] h-screen">
      {/* card column container */}
      <div className="">
        <div className="flex h-[60vh]  justify-items-start items-start mx-auto pt-8">
          {cardList}
        </div>
      </div>
    </div>
  );
}
