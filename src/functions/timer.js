export const timeOut = (duration)=>{
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  })
}
