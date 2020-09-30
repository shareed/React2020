### The Data
    
    const dummyPieces = [
        {
            id: '1',
            title: 'React Is Fun',
            content: 'Cupcake sesame snaps jelly beans. Toffee sweet roll marzipan marzipan carrot cake biscuit gingerbread cake ice cream.',
            imageUrl:"https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80",
            user: {
            userId: '9',
            userImage: "https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg",
            displayName: 'Shannon Reed',
            email: 'shannon@email.com'
            },
            likes: 34,
            numOfComments: 2000,
            commentsList: [
                {
                    id: 22,
                    username: "philzcoffee",
                    text: "We've got more than just coffees!",
                },
                {
                    id: 23,
                    username: "biancasaurus",
                    text: "Looks delicious!",
                },
                {
                    id: 24,
                    username: "martinseludo",
                    text: "Can't wait to try it!",
                },
            ],
        },
        {
            id: '2',
            title: 'Computer Science: Fun or Not',
            content: 'Sweet roll dessert tiramisu muffin dragée apple pie candy marshmallow carrot cake.',
            imageUrl:"https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80",
            user: {
            userId: '6',
            userImage: "https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg",
            displayName: 'Kitai Bell',
            email: 'keon@email.com'
            },
            likes: 87,
            numOfComments: 5000,
            commentsList: [
                {
                    id: 36,
                    username: "twitch",
                    text: "Epic Street Fighter action here in Vegas!",
                },
                {
                    id: 37,
                    username: "michaelmarzetta",
                    text: "Omg that match was crazy",
                },
                {
                    id: 38,
                    username: "themexican_leprechaun",
                    text: "What a setup",
                },
                {
                    id: 39,
                    username: "dennis_futbol",
                    text: "It that injustice",
                },
            ],
        },
    ];

    export default dummyPieces;

**Map Through dummyPieces**

    {pieces.map((piece, index) => {
        return <Piece  key= { piece.id } 
                        piece = { piece }  
                        likePiece = { likePiece } 
                        liked = { false } />
        })}


**Map Through Comments List**

    { commentsList ?
        commentsList.map((comment, index) => {
            return <Comment key = {index} comment = { comment } />
        }) : null}




 **NOTES**
  - https://github.com/SR-Portfolio-Projects/Code-Pieces-Part-I/tree/master