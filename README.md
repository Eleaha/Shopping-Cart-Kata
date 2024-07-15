# Shopping Cart Kata

## The Challenge

To create a simple checkout system that consumes data representing a current basket, and when queried responds with the subtotal of the items accounting for special prices.

## The Data

### Pricing structure

| Item Code | Unit Price | Special Price |
| :-------- | :--------- | :------------ |
| A         | 50         | 3 for 140     |
| B         | 35         | 2 for 60      |
| C         | 25         |               |
| D         | 12         |               |

### Example Basket Data

```
[
    {
        "code": "A",
        "quantity": 3
    },
    {
        "code": "B",
        "quantity": 3
    },
    {
        "code": "C",
        "quantity": 1
    },
    {
        "code": "D",
        "quantity": 2
    }
]
```

## Running Locally

To run the code locally, open your favorite code editor (VS code suggested). Click [here]('https://github.com/Eleaha/Shopping-Cart-Kata/fork') to fork the repo. Once forked, use the following command in your code editor's terminal:

`git clone https://github.com/**Your User name**/Shopping-Cart-Kata.git`

To navigate into the repo, use:

`cd Shopping-Cart-Kata`

If using VS code, use the command `code` to open (use ``code .`` if using windows WSL) and you're good to go!

### Commands

`npm run subtotal`
To get the subtotal of the current basket.

`npm test`
To run the test suite

### Example response
On using the command `npm run subtotal`, you can expect a response that looks similar to the below:

**Your total is £548**

### Updating the basket

To change the basket contents, navigate to /src/data/basket-data.json

### Dependencies

Once you've opened the repo locally, use the command `npm i ` to install all needed dependencies.

#### Development

- jest
- ts-jest
- @types/jest

#### Regular

- typescript
- ts-node
- @types/node

#### Minimum Node Version - v21.6.0
