

const SocialLinK = ({linkArray}) => { 

  

  return(
  <>
    {linkArray.map((item) => {

      return(
      <a href={item.href} key={item.key} target="_blank" className="hover:border-(--headingTextColor) hover:shadow-xl/40 hover:shadow-blue-950 hover:ring flex gap-3 rounded-2xl border border-(--paraTextColor) h-fit w-fit items-center mb-3 ">
        <img className="h-8 aspect-square pl-1 rounded-2xl" src={item.src} alt="" />
        <p className="pr-2">{item.name}</p>
      </a>)
    })}
  </>
  )
}

export default SocialLinK;
