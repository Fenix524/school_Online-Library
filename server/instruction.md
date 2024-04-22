**\*\*\*** Users **\*\*\*\***
URL /api/v1/users
URL /api/v1/users/:id

Body example:
{
"username": "john_doe",
"email": "john.doe@example.com",
"password": "password123",
"dateOfBirth": "1990-05-15",
"books": [],
"profilePictureUrl": "https://example.com/profile_picture/john_doe.jpg"
}

**\*\*\*** Books **\*\*\*\***
URL /api/v1/books
URL /api/v1/books/:id

Body example:
{
"name": "Книга 2",
"desc": "Опис книги 2",
"author": "Автор 2",
"year": 2022,
"genre": [
"Фантастика",
"Детектив"
],
"imgUrl": "https://example.com/book2.jpg",
"listOfBookCopyIds": [
{
"_id": "копія1",
"isReserved": false
},
{
"_id": "копія2",
"isReserved": true
}
]
}

**\*\*\*** BookCopy **\*\*\*\***
bookCopies
URL /api/v1/books
URL /api/v1/books/:id
