import React, { useEffect } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts'
import Spinner from '../Spinner/Spinner'
import { fetchData } from '../../redux/data/data.action'
import { connect } from 'react-redux'
import { Props } from './BarChartComponent.interface'




const BarChartComponent:React.FC<Props> = ({fetchDataThunk,xAxisData,yAxisData,loading}) => {
  // const [yAxisData, setYaxisData] = useState<any>([])
  // const [xAxisData, setXaxisData] = useState<any>([])


  // const fetchYAxis = () => {
  //   axios.get(process.env.REACT_APP_Y_AXIS as string)
  //     .then(({ data }) => {
  //       if (Array.isArray(data)) {
  //         if (data.length > 50) {
  //           setYaxisData(data.slice(0, 51))
  //         } else {
  //           setYaxisData(data)
  //         }
  //       }
  //     })
  //     .catch((error: any) => {
  //       // relative error handeling goes here
  //       console.log(error.message)
  //     })
  // }

  // const fetchXAxis = () => {
  //   axios.get(process.env.REACT_APP_X_AXIS as string)
  //     .then(({ data }) => {
  //       if (Array.isArray(data)) {
  //         if (data.length > 50) {
  //           setXaxisData(data.slice(0, 51))
  //         } else {
  //           setXaxisData(data)
  //         }
  //       }
  //     })
  //     .catch((error: Record<string, any>) => {
  //       // relative error handeling goes here
  //       console.log(error.message)
  //     })
  // }



  useEffect(() => {
    const fetchData = () => {
      // // process.env.REACT_APP_X_AXIS
      // // process.env.REACT_APP_Y_AXIS
      // fetchXAxis()
      // fetchYAxis()
      fetchDataThunk()
    }
    fetchData()
  }, [fetchDataThunk])

  let dataSet: any = [];
  const prepareDataSet = () => {
    // assuming both x axis and y axis list are equal in length
    if (xAxisData.length && yAxisData.length) {
      for (let i = 0; i <= xAxisData.length - 1; i++) {
        let obj = {
          id1: xAxisData[i].id,
          id2: yAxisData[i].id,
          label1: xAxisData[i].Label,
          label2: yAxisData[i].Label,
          RandomNumber1: xAxisData[i].RandomNumber,
          RandomNumber2: yAxisData[i].RandomNumber
        }
        dataSet.push(obj)
      }
    }
  }
  prepareDataSet()
  return (
    <div>
      {dataSet.length ? (
        <>
          <ResponsiveContainer height={600}>
            <BarChart  margin={{ top: 10, right: 30, left: 0, bottom: 0 }} width={720} height={400} data={dataSet}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Bar type={"monotone"} dataKey="RandomNumber1" stroke='#2563eb' fill='#3b82f6' />
              <Bar type={"monotone"} dataKey="RandomNumber2" stroke='#7c3aed' fill='#8b5cf6' />
              <Tooltip />
              <Legend/>
              <XAxis dataKey={"label2"} />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
            </BarChart>
          </ResponsiveContainer>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  )
}

const mapDispatchToProps = (dispatch:any) => ({
  fetchDataThunk:() => dispatch(fetchData())
})

const mapStateToProps = (state:Record<string,any>) => ({
  xAxisData:state.chartData.xAxisData,
  yAxisData:state.chartData.yAxisData,
  loading:state.chartData.loading

})



//@ts-ignore
export default connect(mapStateToProps,mapDispatchToProps)(BarChartComponent)
