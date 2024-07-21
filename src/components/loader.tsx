const Loader = () => {
  return (
    <div>loading...</div>
  )
}

export default Loader

interface Skeletonprops {
  width?:string;
  length?:number;
}

export const Skeleton = ({width='unset', length=3} : Skeletonprops) => {
  const skeletons = Array.from({length},(_,idx) => (
    <div key={idx} className="skeleton-shape"></div>
  ))
  return (
  <div className="skeleton-loader" style={{width}}>
    {skeletons}
  </div>
  )
}