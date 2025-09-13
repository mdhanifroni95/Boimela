import Header from "./Header";
import Search from "./Search";
import BookList from "./BookList";
import { useState } from "react";

const BoiMela = () => {
  const book = [
    {
      id: 1,
      title: "Eloquent JavaScript, Third Edition",
      subtitle: "A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      published: "2018-12-04T00:00:00.000Z",
      publisher: "No Starch Press",
      pages: 472,
      website: "http://eloquentjavascript.net/",
      isFeature: true,
    },
    {
      id: 2,
      title: "Practical Modern JavaScript",
      subtitle: "Dive into ES6 and the Future of JavaScript",
      author: "Nicolás Bevacqua",
      published: "2017-07-16T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 334,
      website: "https://github.com/mjavascript/practical-modern-javascript",
      isFeature: false,
    },
    {
      id: 3,
      title: "Understanding ECMAScript 6",
      subtitle: "The Definitive Guide for JavaScript Developers",
      author: "Nicholas C. Zakas",
      published: "2016-09-03T00:00:00.000Z",
      publisher: "No Starch Press",
      pages: 352,
      website: "https://leanpub.com/understandinges6/read",
      isFeature: false,
    },
    {
      id: 4,
      title: "Speaking JavaScript",
      subtitle: "An In-Depth Guide for Programmers",
      author: "Axel Rauschmayer",
      published: "2014-04-08T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 460,
      website: "http://speakingjs.com/",
      isFeature: true,
    },
    {
      id: 5,
      title: "Learning JavaScript Design Patterns",
      subtitle: "A JavaScript and jQuery Developer's Guide",
      author: "Addy Osmani",
      published: "2012-08-30T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 254,
      website:
        "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
      isFeature: true,
    },
    {
      id: 6,
      title: "You Don't Know JS Yet",
      subtitle: "Get Started",
      author: "Kyle Simpson",
      published: "2020-01-28T00:00:00.000Z",
      publisher: "Independently published",
      pages: 143,
      website:
        "https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started",
      isFeature: true,
    },
    {
      id: 7,
      title: "Pro Git",
      subtitle: "Everything you neeed to know about Git",
      author: "Scott Chacon and Ben Straub",
      published: "2014-11-18T00:00:00.000Z",
      publisher: "Apress; 2nd edition",
      pages: 458,
      website: "https://git-scm.com/book/en/v2",
      isFeature: false,
    },
    {
      id: 8,
      title: "Rethinking Productivity in Software Engineering",
      subtitle: "",
      author: "Caitlin Sadowski, Thomas Zimmermann",
      published: "2019-05-11T00:00:00.000Z",
      publisher: "Apress",
      pages: 310,
      website: "https://doi.org/10.1007/978-1-4842-4221-6",
      isFeature: false,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="mx-4 p-2">
      <Header />
      <Search searchTerm={searchTerm} onSearchBook={setSearchTerm} />
      <BookList searchTerm={searchTerm} book={book} />
    </div>
  );
};

export default BoiMela;
