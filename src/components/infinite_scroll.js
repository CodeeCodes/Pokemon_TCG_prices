import { useState, useEffect } from "react";

export default function useInfiniteScroll() {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
   
  }, []);

  //   useEffect(() => {
  //     if (!isFetching) return;
  //     callback(() => {
  //       console.log("called back");
  //     });
  //   }, [isFetching]);



  return [isFetching, setIsFetching];
}
