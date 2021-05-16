---
type: post
title: Weeknotes 4 - Learning AWS, debugging Node.js, and stubbing with Jest
date: 2021-05-16
draft: false
media: ./notes.jpg
author: Csaba Gyõrfi
tags:
  - Weeknotes
  - AWS
  - Visual Studio Code
  - Node.js
  - Debugging
  - Jest
  - Stub
---

# ☁️

This week I started studying for the [AWS Certified Developer - Associate](https://aws.amazon.com/certification/certified-developer-associate/) certification. I'm following the [Ultimate AWS Certified Developer Associate 2021](https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/) course on Udemy. Other than that, I'm using the test quizzes from the [AWS Certified Developer](https://learn.acloud.guru/course/aws-certified-developer-associate/dashboard) course on A Cloud Guru. I'm testing the water, and I don't have a solid deadline set yet. So far, I finished the sections about [IAM](https://aws.amazon.com/iam/) and [EC2](https://aws.amazon.com/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc), and there is a lot of overlap with the [AWS Certified Cloud Practitioner](https://aws.amazon.com/certification/certified-cloud-practitioner/) certification, which I passed in 2019.

# 🐛🔫

I'm using VS Code at the moment, and we are writing [Node.js](https://nodejs.org/en/) microservices predominantly. Some of my colleagues use more heavyweight IDEs, such as [IntelliJ IDEA](https://www.jetbrains.com/idea/?fromMenu), which provides better debugging tools(breakpoints, highlighting weird formats/missing variables etc.). Although I never felt the need for an IDE when working with dynamically typed languages, I started considering other tools or getting out more of VS Code.

I trialled the [Node.js debugging tool](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal):

To enable, open up the command palette

> ⇧⌘P

and select `> Toggle Auto Attach`

Then select the mode for auto attach. I use the `always` mode, which allows me to use breakpoint anywhere. There is a `smart` mode that ignores scripts in the `node_modules` folder. Unfortunately, smart mode did not work on test code. Apart from occasionally being slow, breakpoints can be helpful, although you can avoid using them with good tests and logs.

# 🧪

As said, driving your development with tests can significantly reduce the amount of time spent on debugging. I always have to look up the [documentation](https://jestjs.io/docs/mock-functions) for test doubles when I am testing with [Jest](https://jestjs.io/), so I'll close my notes with an example of creating a [Stub](https://martinfowler.com/bliki/TestDouble.html).

```js
// in this example retrieveUser is calling the getUserRecord function to get records from the db

const { getUserRecord } = require("../module-to-stub")
const { retrieveUser } = require("../retrieve-user")

jest.mock("../module-to-stub", () => ({
  getUserRecord: jest.fn(),
}))

describe("retrieve user", () => {
  it("can retrieve a user", async () => {
    getUserRecord.mockImplementation(() => ({
      userName: "Batman",
      favouriteDrink: "lemon tea",
    }))

    const result = await retrieveUser()
    expect(result.statusCode).toBe(200)
  })

  it("can handle when the user is not in the db", async () => {
    getUserRecord.mockImplementation(() => {
      throw new UserNotFoundError()
    })

    const result = await retrieveUser()
    expect(result.statusCode).toBe(404)
  })
})
```
