import { createStore } from "vuex";

import userStore from './modules/userStore';
// import platformStore from './modules/platformStore';
// import physicalProjectStore from './modules/physicalProjectStore';
// import divisionStore from './modules/divisionStore';
// import schoolStore from './modules/schoolStore';
// import scoreAnalysisStore from './modules/scoreAnalysisStore';
// import classesStore from './modules/classesStore';
// import gradeStore from './modules/gradeStore';
// import bookingStore from './modules/bookingStore';
// import studentStore from './modules/studentStore';


export default createStore({
  modules: {
    user: userStore,
    // platform: platformStore,
    // project: physicalProjectStore,
    // division: divisionStore,
    // school: schoolStore,
    // classes: classesStore,
    // grade: gradeStore,
    // scoreAnalysis: scoreAnalysisStore,
    // booking: bookingStore,
    // student:studentStore,
  },
});