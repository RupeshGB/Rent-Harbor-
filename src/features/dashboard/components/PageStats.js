import HomeIcon  from '@heroicons/react/24/outline/HomeIcon'
import HomeIconFilled  from '@heroicons/react/24/solid/HomeIcon'


function PageStats({}){
    return(
        <div className="stats bg-base-100 shadow">
  
  <div className="stat">
    <div className="stat-figure invisible md:visible">
        <HomeIcon className='w-8 h-8'/>
    </div>
    <div className="stat-title">Total Units</div>
    <div className="stat-value">7</div>
    <div className="stat-desc">17% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure invisible md:visible">
        <HomeIconFilled className='w-8 h-8'/>
    </div>
    <div className="stat-title">Filled Units</div>
    <div className="stat-value">5</div>
    <div className="stat-desc">17% less than last month</div>
  </div>
</div>
    )
}

export default PageStats