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
    component: Admin,
    name: 'home',
    redirect: '/home/welcome',
    // 子路由
    children: [
      {
        path: '/home/welcome',
        name: 'welcome',
        meta: { title: '欢迎', icon: 'icon-icon-test' },
        component: Index,
      },
      // 成绩管理
      {
        path: '/score-manage',
        name: 'ScoreManage',
        meta: { title: '成绩管理', icon: 'icon-icon-test' },
        redirect: '/score-manage/list',
        children: [
          {
            path: '/score-manage/list',
            name: 'ScoreManageList',
            meta: { title: '原始成绩管理', icon: 'icon-icon-test' },
            component: OriginalScoreManage,
          },
          {
            path: '/score-manage/student',
            name: 'ScoreManageStudent',
            meta: { title: '学生成绩管理', icon: 'icon-icon-test' },
            component: StudentScoreManage,
          },
          {
            path: '/score-manage/import',
            name: 'ScoreManageImport',
            meta: { title: '成绩采集管理', icon: 'icon-icon-test' },
            component: ScoreCollectionManage,
          },
        ],
      },
      // 体测预约部分
      {
        path: '/booking-manage',
        name: 'PhysicalBooking',
        meta: { icon: 'icon-icon-test', title: '体测预约' },
        redirect: '/booking-manage/list',
        children: [
          {
            path: '/booking-manage/list',
            name: 'PhysicalBookingList',
            meta: { icon: 'icon-icon-test', title: '预约场地管理' },
            component: SpaceReserve,
          },
          {
            path: '/booking-manage/report',
            name: 'PhysicalBookingReport',
            meta: { icon: 'icon-icon-test', title: '预约报表查询' },
            component: ReportReserve,
          },
          {
            path: '/booking-manage/state',
            name: 'PhysicalBookingState',
            meta: { icon: 'icon-icon-test', title: '预约情况查询' },
            component: StateReserve,
          },
          {
            path: '/booking-manage/log',
            name: 'PhysicalBookingLog',
            meta: { icon: 'icon-icon-test', title: '预约日志查询' },
            component: LogReserve,
          },
        ],
      },
      // 学生管理部分
      {
        path: '/student-manage',
        name: 'StudentManage',
        meta: { icon: 'icon-icon-test', title: '学生管理' },
        redirect: '/student-manage/student-info',
        children: [
          {
            path: '/student-manage/student-info',
            name: 'StudentInfo',
            meta: { icon: 'icon-icon-test', title: '学生信息' },
            component: StudentInfo
          },
          {
            path: '/student-manage/student-feature',
            name: 'StudentFeature',
            meta: { icon: 'icon-icon-test', title: '学生特征值' },
            component: StudentFeature
            // children: [{ path: '/student-manage/student-info/photo-collect', name: 'PhotoCollect', meta: { icon: 'icon-icon-test', title: '照片采集' }, component: PhotoCollect },
            // { path: '/student-manage/student-info/photo-import', name: 'PhotoImport', meta: { icon: 'icon-icon-test', title: '照片导入' }, component: PhotoImport },
            // { path: '/student-manage/student-info/photo-export', name: 'PhotoExport', meta: { icon: 'icon-icon-test', title: '照片导出' }, component: PhotoExport },
            // { path: '/student-manage/student-info/create-feature', name: 'CreateFeature', meta: { icon: 'icon-icon-test', title: '生成特征值' }, component: CreateFeature },
            // ]
          },
        ]
      },
      // 体测统计部分
      {
        path: '/analysis',
        name: 'Statistics',
        meta: { icon: 'icon-icon-test', title: '体测统计' },
        redirect: '/analysis/physical-score',
        children: [
          {
            path: '/analysis/physical-score',
            name: 'PhysicalScoreAnalysis',
            meta: { icon: 'icon-icon-test', title: '总分统计' },
            component: PhysicalScoreAnalysis,
          },
          {
            path: '/analysis/subject-score',
            name: 'SubjectScoreAnalysis',
            meta: { icon: 'icon-icon-test', title: '单科统计' },
            component: SubjectScoreAnalysis,
          },
          {
            path: '/analysis/BMI-score',
            name: 'PhysicalBMIAnalysis',
            meta: { icon: 'icon-icon-test', title: 'BMI统计' },
            component: PhysicalBMIAnalysis,
          },
        ],
      },
      // 信息管理部分
      {
        path: '/info-manage',
        name: 'InfoManage',
        meta: { icon: 'icon-icon-test', title: '信息管理' },
        redirect: '/info-manage/class-info',
        children: [
          {
            path: '/info-manage/class-info',
            name: 'ClassInfoManage',
            meta: { icon: 'icon-icon-test', title: '班级信息' },
            component: ClassInfoManage,
          },
          {
            path: '/info-manage/schcool-info',
            name: 'SchoolInfoManage',
            meta: { icon: 'icon-icon-test', title: '学校信息' },
            component: SchoolInfoManage,
          },
          {
            path: '/info-manage/area-info',
            name: 'AreaInfoManage',
            meta: { icon: 'icon-icon-test', title: '区域信息' },
            component: AreaInfoManage,
          },
        ],
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: '登录页'
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
