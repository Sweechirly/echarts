<template>
  <div id="myChart" :style="{width: '900px', height: '900px'}">
  </div>
</template>
<script>
  import data from '../../static/data/data.json'
export default {
  name: 'hello',
  data() {
    return {
    }
  },
  mounted() {
    this.drawmap();
  },
  methods: {
    drawmap() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表

      var schema = data.scatter.schema;
      var itemStyle = {
        normal: {
          opacity: 0.8,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      };
      myChart.setOption({
        backgroundColor: '#404a59',
        color: [
          '#dd4444', '#fec42c', '#80F1BE'
        ],
        legend: {
          y: 'top',
          data: ['北京', '上海', '广州'],
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        },
        grid: {
          x: '10%',
          x2: 150,
          y: '18%',
          y2: '10%'
        },
        tooltip: {
          padding: 10,
          backgroundColor: '#222',
          borderColor: '#777',
          borderWidth: 1,
          formatter: function(obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
              + obj.seriesName + ' ' + value[0] + '日：'
              + value[7]
              + '</div>'
              + schema[1].text + '：' + value[1] + '<br>'
              + schema[2].text + '：' + value[2] + '<br>'
              + schema[3].text + '：' + value[3] + '<br>'
              + schema[4].text + '：' + value[4] + '<br>'
              + schema[5].text + '：' + value[5] + '<br>'
              + schema[6].text + '：' + value[6] + '<br>';
          }
        },
        xAxis: {
          type: 'value',
          name: '日期',
          nameGap: 16,
          nameTextStyle: {
            color: '#fff',
            fontSize: 14
          },
          max: 31,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#eee'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: 'AQI指数',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
            color: '#fff',
            fontSize: 16
          },
          axisLine: {
            lineStyle: {
              color: '#eee'
            }
          },
          splitLine: {
            show: false
          }
        },
        visualMap: [
          {
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 250,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：PM2.5'],
            textGap: 30,
            textStyle: {
              color: '#fff'
            },
            inRange: {
              symbolSize: [10, 70]
            },
            outOfRange: {
              symbolSize: [10, 70],
              color: ['rgba(255,255,255,.2)']
            },
            controller: {
              inRange: {
                color: ['#c23531']
              },
              outOfRange: {
                color: ['#444']
              }
            }
          },
          {
            left: 'right',
            bottom: '5%',
            dimension: 6,
            min: 0,
            max: 50,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['明暗：二氧化硫'],
            textGap: 30,
            textStyle: {
              color: '#fff'
            },
            inRange: {
              colorLightness: [1, 0.5]
            },
            outOfRange: {
              color: ['rgba(255,255,255,.2)']
            },
            controller: {
              inRange: {
                color: ['#c23531']
              },
              outOfRange: {
                color: ['#444']
              }
            }
          }
        ],
        series: [
          {
            name: '北京',
            type: 'scatter',
            itemStyle: itemStyle,
            data: data.scatter.dataBJ
          },
          {
            name: '上海',
            type: 'scatter',
            itemStyle: itemStyle,
            data: data.scatter.dataSH
          },
          {
            name: '广州',
            type: 'scatter',
            itemStyle: itemStyle,
            data: data.scatter.dataGZ
          }
        ]
      });
    }
  }
}
</script>

