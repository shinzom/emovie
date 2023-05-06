<template>
    <div class="searchbox" style="margin-left: 50px;margin-top: 5px;">
        <svg t="1681267743489" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="2635" width="18px" height="18px">
            <path d="M121.964897 709.911936a416.481669 416.481669 0 1 1 589.035039 0 416.737493 416.737493 0 0 1-589.035039 0z
            m497.577915-498.857036a287.802136 287.802136 0 1 0 0 407.463868 287.802136 287.802136 0 0 0 0-407.463868z m405.481232
            696.289301l-117.039535 116.655799L704.604333 831.428393l127.91206-127.91206z" fill="#105421" p-id="2636">
            </path>
        </svg>
<!--        <span style="font-size: 23px;">搜索</span>-->
        <input class="search" id="search" v-model="searchFilm"/>
    </div>
    <el-collapse style="margin-left: 50px;margin-top: 5px;">
        <el-collapse-item style="font-size: 50px;" title="筛选" name="1">
<!--            <div class="categorybox">-->
<!--                <svg t="1681033785005" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"-->
<!--                    p-id="5490" width="23px" height="23px">-->
<!--                    <path d="M967.9234 816.206954l-147.416093-192.48379c52.29229-49.884092 85.146985-119.721821 85.146985-197.472199 -->
<!--                        0-150.684361-122.990089-273.330422-274.018478-273.330422-151.200403 0-274.018478 122.646061-274.018478 273.330422s122.990089 -->
<!--                        273.330422 274.018478 273.330422c48.679993 0 94.263733-12.901058 133.998992-35.090879l147.932135 193.171846c6.70855 8.77272 -->
<!--                        16.857383 13.417101 27.350244 13.417101 7.224593 0 14.621199-2.236183 20.641693-7.052579C976.524105 852.501932 979.448345 -->
<!--                        831.172182 967.9234 816.206954L967.9234 816.206954zM421.090543 426.250966c0-115.765496 94.435747-209.857215 -->
<!--                        210.545271-209.857215s210.545271 94.091718 210.545271 209.857215-94.435747 209.857215-210.545271 209.857215S421.090543 -->
<!--                        542.016462 421.090543 426.250966L421.090543 426.250966zM288.467663 288.811692 83.254829 288.811692c-18.921552 -->
<!--                        0-34.230808-15.309256-34.230808-34.058794s15.309256-34.058794 34.230808-34.058794l205.212834 0c18.921552 0 34.230808 -->
<!--                        15.309256 34.230808 34.058794C322.698471 273.502436 307.389216 288.811692 288.467663 288.811692L288.467663 288.811692zM280.210986 -->
<!--                        626.131362 83.254829 626.131362c-18.921552 0-34.230808-15.309256-34.230808-34.058794s15.309256-34.058794 -->
<!--                        34.230808-34.058794l196.956157 0c18.921552 0 34.230808 15.309256 34.230808 34.058794C314.441794 610.822107 299.132538 -->
<!--                        626.131362 280.210986 626.131362L280.210986 626.131362zM239.78767 457.041492l-156.532841 0c-18.921552 -->
<!--                        0-34.230808-15.309256-34.230808-34.230808 0-18.921552 15.309256-34.230808 34.230808-34.230808l156.532841 0c18.921552 0 -->
<!--                        34.230808 15.309256 34.230808 34.230808C273.846464 441.732236 258.537208 457.041492 239.78767 457.041492L239.78767 -->
<!--                        457.041492zM460.137746 801.241727 83.254829 801.241727c-18.921552 0-34.230808-15.309256-34.230808-34.230808s15.309256-34.230808 -->
<!--                        34.230808-34.230808l376.882916 0c18.921552 0 34.230808 15.309256 34.230808 34.230808C494.368554 785.932471 479.059298 801.241727 -->
<!--                        460.137746 801.241727L460.137746 801.241727z" fill="#105421" p-id="5491"></path>-->
<!--                </svg>-->
<!--                <input class="category" id="category" v-model="category" placeholder="类目">-->
<!--            </div>-->

          <el-row :gutter="10">

            <el-col :span="10"><div  />


              <div style="margin: 5px">
                <div style="margin: 1px; font-size: 10px ">地区</div>
                <el-radio-group v-model="area"  size="small">
                  <el-radio-button label="全部" />
                  <el-radio-button label="中国" />
                  <el-radio-button label="欧美" />
                  <el-radio-button label="日韩" />
                </el-radio-group>
              </div>

              <div style="margin: 5px">
                <div style="margin: 1px; font-size: 10px ">年份</div>
                <el-radio-group v-model="year"  size="small">
                  <el-radio-button label="全部" />
                  <el-radio-button label="2023" />
                  <el-radio-button label="2022" />
                  <el-radio-button label="2021" />
                </el-radio-group>
              </div>

              <div style="margin: 5px">
              <div style="margin: 1px; font-size: 10px ">类型</div>
              <el-radio-group v-model="type"  size="small">
                <el-radio-button label="全部" />
                <el-radio-button label="喜剧" />
                <el-radio-button label="爱情" />
                <el-radio-button label="恐怖" />
                <el-radio-button label="剧情" />
                <el-radio-button label="科幻" />
              </el-radio-group>
              </div>

            </el-col>


            <el-col :span="14"><div  /></el-col>
          </el-row>




        </el-collapse-item>
    </el-collapse>

  <el-row :gutter="20">
    <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="16"><div class="grid-content ep-bg-purple" />

<!--    <div style="background-color: #FAFAFA;height:300px;">-->
<!--      <el-table :data="movie_tableData" style="width: 100%">-->
<!--        <el-table-column prop="title" label="电影名称" />-->
<!--        <el-table-column prop="runtime" label="时长" />-->
<!--        <el-table-column prop="voteAverage" label="评分"  />-->
<!--        <el-table-column prop="voteCount" label="评分人数" />-->
<!--      </el-table>-->
<!--    </div>-->

   <div style="margin: 20px;   padding: 20px">


     <el-row :gutter="10">
       <el-col :span="1"><div  /></el-col>
       <el-col :span="11"><div />

       <el-card>
         <el-row :gutter="10">
           <el-col :span="8"><div  />
             <el-image style=" height: 150px" src="https://th.bing.com/th/id/OIP.GOdspcEPqvY7FCsJeNZ0FAHaJh?w=141&h=181&c=7&r=0&o=5&pid=1.7" :fit="'scale-down'" />
           </el-col>
           <el-col :span="14"><div  />
             <el-descriptions title="阳光灿烂的日子" column="1">
               <el-descriptions-item label="简介" >
                 20世纪70年代初的北京，忙着“闹革命”大人无空理会小孩，加上学校停课无事可做，以军队大院男孩为突出代表的少年人便自找乐子，靠起哄、打架、闹事、拍婆子等方式挥霍过量的荷尔蒙

               </el-descriptions-item>
               <div>
                 <span></span>
               </div>
               <el-descriptions-item label="评分">
                 <el-tag size="small">8.8分</el-tag>
               </el-descriptions-item>
               >
             </el-descriptions>
           </el-col>
           <el-col :span="2"><div  /></el-col>
         </el-row>
       </el-card>

       </el-col>
       <el-col :span="11"><div  />

         <el-card>
           <el-row :gutter="10">
             <el-col :span="8"><div  />
               <el-image style=" height: 150px" src="https://th.bing.com/th/id/OIP.B7dADaqp1uFuhzgGZPEbJgAAAA?w=142&h=189&c=7&r=0&o=5&pid=1.7" :fit="'scale-down'" />
             </el-col>
             <el-col :span="14"><div  />
               <el-descriptions title="太阳照常升起" column="1">
                 <el-descriptions-item label="简介"  >
                   电影改編自作家葉彌的短篇小說《天鵝絨》。[1]电影讲述了四段分别发生于1958年至1976年期间，地点在中国南部、东部、西部，看似分散实又相连的人物故事。

                 </el-descriptions-item>
                 <div>
                   <span></span>
                 </div>
                 <el-descriptions-item label="评分">
                   <el-tag size="small">9.2分</el-tag>
                 </el-descriptions-item>
                 >
               </el-descriptions>
             </el-col>
             <el-col :span="2"><div  /></el-col>
           </el-row>
         </el-card>

       </el-col>
       <el-col :span="1"><div  /></el-col>
     </el-row>

   </div>

    </el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row>

</template>

<script>
export default {
    data() {
        return {
            searchFilm: "",
            category: "",
          movie_tableData:[
            {
              title:'阳光灿烂的日子',
              runtime:'129min',
              voteAverage:'8.8',
              voteCount:'1976'
            }

          ],
          area:"",
          year:"",
          type:""
        }
    },
    methods: {

    }
}
</script>

<style>
.search {
    width: 300px;
    height: 28px;
    margin-left: 10px;
    color: rgb(0, 0, 0);
    border: 0;
    border-bottom: 2px solid #056630;
}
.search:focus{
    border-top: 2px solid #000000;
    border: 2px solid #000000;
    border-bottom: 2px solid #000000;
}
.search:hover {
    border-bottom: 2px solid #033f1e;
}
/*.el-collapse-item__header.is-active {*/
/*  border-bottom-color: transparent;*/
/*  font-size: 30px;*/
/*}*/
/*.el-collapse-item__wrap{*/
/*  font-size: 25px;*/
/*}*/

/*#el-collapse-head-1313{*/
/*  font-size: 25px;*/
/*}*/
</style>
