import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {source : "Airbnb", count : "12", conversionPercent : 48.0},
    {source : "Vrbo", count : "18", conversionPercent : 48.6},
    {source : "Zillow", count : "4", conversionPercent : 25.0},
    {source : "Apartments", count : "3", conversionPercent : 33.3},
]

function UserChannels(){
    return(
        <TitleCard title={"User Signup Source"}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th className="normal-case">Source</th>
                        <th className="normal-case">No of Users</th>
                        <th className="normal-case">Conversion</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            userSourceData.map((u, k) => {
                                return(
                                    <tr key={k}>
                                        <th>{k+1}</th>
                                        <td>{u.source}</td>
                                        <td>{u.count}</td>
                                        <td>{`${u.conversionPercent}%`}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </TitleCard>
    )
}

export default UserChannels