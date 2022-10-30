// export const ACCESS_TOKEN = 'Access-Token'
export const ACCESS_TOKEN = 'Authorization' // 'token'
export const PLATFORM_ID = 'Platform_ID'
export const PLATFORM_HOST = 'Platform_Host'

// 用户类
export const Action_UserLogin = 'user/login111'
export const Action_GetUserInfo = 'user/GetInfo'

// 平台类
export const Action_GetUserPlatform = 'platform/GetCollect'
export const Action_ChangeUserPlatform = "platform/SelectPlatform"


// 平台下的体测项目
export const Action_GetPhysicalProject = 'project/GetCollect'
export const Action_SelectProject = 'project/SelectProject'


// 平台项目下的区域
export const Action_GetDivisions = 'division/GetCollect'
export const Action_GetDivisionTree = 'division/GetDivisionTree'
export const Action_SelectDivision = 'division/SelectDivision'
export const Action_SelectDivisionId = 'division/SelectDivisionId'

// 平台项目下的学校
export const Action_GetSchools = 'school/GetCollect'
export const Action_SetSchoolId = 'school/SelectSchoolId'
export const Action_SelectSchool = 'school/SelectSchool'


// 平台项目下的班级
export const Action_GetClasses = 'classes/GetCollect'
export const Action_SelectClasses = 'classes/SelectClasses'
export const Action_SelectClassesId = 'classes/SelectClassesId'


/**获取总分统计 */
export const Action_GetTotalSTAT = 'scoreAnalysis/getTotalSTAT'
export const Action_GetScoreSTAT = 'scoreAnalysis/getScoreSTAT'
export const Action_GetBMISTAT = 'scoreAnalysis/getBMISTAT'


/** 预约管理 */
export const Action_GetBooking = 'booking/GetCollect'

/** 学生 */
export const Action_GetStudentInfo = 'student/getStudentInfo'

/** 预约场地管理 */
export const Action_GetSiteManage = 'booking/getBookingSite'
export const Action_addSiteManage = 'booking/addBookingSite'
export const Action_GetReportManage = 'booking/getBookingReport'

/** 预约报表管理 */

