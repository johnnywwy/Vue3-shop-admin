import { createRouter, createWebHashHistory } from "vue-router";


import Admin from "@/layouts/admin.vue"
import Index from "@/pages/index.vue";
import Login from "@/pages/login.vue";
import NotFound from "@/pages/404.vue";

// 成绩统计
import OriginalScoreManage from '@/pages/scoreManage/OriginalScoreManage.vue'
import ScoreCollectionManage from '@/pages/scoreManage/ScoreCollectionManage.vue'
import StudentScoreManage from '@/pages/scoreManage/StudentScoreManage.vue'

// 体测预约
import LogReserve from '@/pages/bookingManage/LogReserve.vue'
import ReportReserve from '@/pages/bookingManage/ReportReserve.vue'
import SpaceReserve from '@/pages/bookingManage/SpaceReserve.vue'
import StateReserve from '@/pages/bookingManage/StateReserve.vue'

// 学生管理
import StudentInfo from '@/pages/studentManage/StudentInfo.vue'
import StudentFeature from '@/pages/studentManage/StudentFeature.vue'


// 体测统计
import PhysicalBMIAnalysis from '@/pages/analysisManage/PhysicalBMIAnalysis.vue'
import SubjectScoreAnalysis from '@/pages/analysisManage/SubjectScoreAnalysis.vue'
import PhysicalScoreAnalysis from '@/pages/analysisManage/PhysicalScoreAnalysis.vue'

/** 信息管理 */
import ClassInfoManage from '@/pages/infoManage/ClassInfoManage.vue';
import SchoolInfoManage from '@/pages/infoManage/SchoolInfoManage.vue';
import AreaInfoManage from '@/pages/infoManage/AreaInfoManage.vue';

// 统计图标

// 系统设置

const routes = [
  {
    path: "/",
    component: Index,
    meta: {
      title: '后台首页',
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: '登录页',
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
