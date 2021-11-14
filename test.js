// import React,{useEffect,useState} form 'react '

// export function usePrevious(previous) {
//     const lock = useRef(false)
//     const last = useRef()
//     const [value,setValue] = useState(undefined)

//     useEffect(() => {
//         if (!lock.current) {
//             last.current
//         } else {
//            lock.current = true
//         }

//     }, [previous])

//     return value
// }

// function useSetState<T>(initialState) {
//   const copyvalue = useRef();
//   const [value, setValue] = useState < T > initialState;

//   const setState = useCallback(
//     (newStateOrCallBack: T | ((preState: T) => void)) => {
//       const isCallBack: boolean =
//         Object.toString.call(newStateOrCallBack) === "[object function]";
//       const newState: T = isCallBack
//         ? newStateOrCallBack(value)
//         : newStateOrCallBack;
//       setValue({ ...value, ...newState });
//     },
//     []
//   );

//   // useE

//   return [value, setState];
// }

// let a = compose(f, g, h)
// a(33)

// 等价于  f(g(h(33)))

// function compose() {
//   const fnList = arguments;
//   let value;
//   return function () {
//     for (let i = fnList.length-1; i >= 0; i--) {
//       value =
//         i === length
//           ? fnList[i].apply(this, arguments)
//           : fnList[i].call(this, value);
//     }
//     return value;
//   };
// }
