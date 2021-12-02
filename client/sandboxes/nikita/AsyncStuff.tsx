import React, { ReactElement, useEffect, useState } from 'react';

interface Props {}

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function AsyncStuff({}: Props): ReactElement {
  const [data, setData] = useState<Data>({
    userId: 0,
    id: 0,
    title: '',
    completed: false,
  });

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setData(json);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     throw error;
    //   });
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos/1'
        );
        const json = await response.json();
        return setData(json);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };

    fetchData();
  });

  return <h1>{data.title}</h1>;
}

export default AsyncStuff;