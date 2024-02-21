import {FaTh, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList, FaWpforms, FaChalkboard} from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";



const menuDetails = [
    {
        path: "/",
        name: "Dashboard",
        icon: <FaTh />,
      },
  
      {
        path : "/studentdetails",
        name : "Student Info",
        icon : <FaUserAlt />,
        subDetails : [
          {
              path : "/studentdetails",
              name : "Add Student",
          },
          {
              path : "/studentlist",
              name : "View Student",
          },
          {
              path : "/employeedetails",
              name : "Add Employee",
          },
          {
              path : "/employeelist",
              name : "View Employee",
          },
        ]
      },
  
      {
          path : "/employee",
          name : "Attendance",
          icon : <FaRegChartBar />,
          subDetails : [
              {
                  path : "/addattendance",
                  name : "Add Attendance",
              },
              {
                  path : "/viewattendance",
                  name : "View Attendance",
              },
            ]
      },
  
      {
          path : "/employee",
          name : "Receipt",
          icon : <FaCommentAlt />,
          subDetails : [
              {
                  path : "/cashIn",
                  name : "Cash In",
              },
            ]
      },
  
      {
          path : "/employee",
          name : "Customer",
          icon : <FaWpforms />,
          subDetails : [
              {
                  path : "/customerform",
                  name : "Customer Form",
              },
              {
                  path : "/customerlist",
                  name : "Customer List",
              },
            ]
      },
  
      {
          path : "/billing",
          name : "Billing",
          icon : <FaShoppingBag />,
          subDetails : [
              {
                  path : "/gst",
                  name : "GST Billing",
              },
              {
                  path : "/nongst",
                  name : "Non-GST Billing",
              },
            ]
      },
  
      {
          path : "/interview",
          name : "Interview",
          icon : <MdFormatListBulleted />,
          subDetails : [
              {
                  path : "/schedule",
                  name : "Interview Schedule",
              },
              {
                  path : "/interviewlist",
                  name : "Interview List",
              },
            ]
      },
  
      {
          path : "/leads",
          name : "Leads",
          icon : <FaThList />,
          subDetails : [
              {
                  path : "/addleads",
                  name : "Add Leads",
              },
              {
                  path : "/leadslist",
                  name : "Leads List",
              },
            ]
      },
  
      {
          path : "/master",
          name : "Master",
          icon : <FaChalkboard />,
          subDetails : [
              {
                  path : "/invoice",
                  name : "Invoice No",
              },
            ]
      },
]

export default menuDetails;