/**
 * Created by admin on 2017/7/26.
 */
export let Option = {
  /*
  *data:饼图数据
  * toalData:总数
  * */
  getOpt:(data,toalData,bgColor) => {
    let changeColor;
    if (toalData[0].value > 0) {
      changeColor = "rgb(85, 190, 242)";
    } else {
      changeColor = "rgb(220,220,220)";
    }
    return {
     color:bgColor,
      series: [
      //   {
      //   type: 'pie',
      //   radius: ['40%', '70%'],
      //   avoidLabelOverlap: false,
      //   hoverAnimation: false,
      //   selectedMode: 'single',
      //   selectedOffset: 0,
      //   label: {
      //     normal: {
      //       show: true,
      //       position: 'center'
      //     },
      //     emphasis: {
      //       show: true,
      //       textStyle: {
      //         fontSize: '30',
      //         fontWeight: 'bold'
      //       }
      //     }
      //   },
      //   labelLine: {
      //     normal: {
      //       show: false
      //     }
      //   },
      //   data: data
      // },

        {
          label: {
            normal: {
              show: false,//去除引线
              position: 'center'
            }
          },
          name: '实时机泵状态统计',
          type: 'pie',
          radius: ['40%', '70%'],
          data: data//分区扇形数据
        },{
        type: 'pie',
        hoverAnimation: false,
        selectedMode: 'single',
        selectedOffset: 0,
        radius: [0, '35%'],
        itemStyle: {
          normal: {
            color: '#fff'
          }
        },
        label: {
          normal: {
            position: 'center',
            formatter: '{b}\n\n{c}',
            textStyle: {
              color: changeColor,
              fontStyle: 'normal',
              fontSize: '18'
            }
          }
        },
        data: toalData//中心圆数据
      }
      //   {
      //   type: 'pie',
      //   hoverAnimation: false,
      //   selectedMode: 'single',
      //   selectedOffset: 0,
      //   radius: [0, '38%'],
      //   data: this.toalData, //中心圆数据
      //   labelLine: {
      //     normal: {
      //       show: false
      //     }
      //   },
      //   itemStyle: {
      //     normal: {
      //       color: '#fff'
      //     }
      //   }
      // }


      ]
    };
  }
}
