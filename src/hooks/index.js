// @flow
import { useState, useEffect } from 'react';

export function useTitle(title: string) {
  useEffect(() => {
    title && (document.title = title);
  });
};

type useContainerDimensionsParams = {
  width: number,
  height: number
}

// Adapted from https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-element
export const useContainerDimensions = (ref: any) : useContainerDimensionsParams => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const getDimensions = () => ({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight
    })

    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (ref.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [ref] )

  return dimensions;
};