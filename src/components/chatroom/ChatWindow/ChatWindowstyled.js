import { Col } from "antd";
import styledComponents from "styled-components";
const StyleCol1 = styledComponents(Col)`

    &&&{
        
        text-align: left;
        padding: 0 30px;
        p{
            font-size: 20px;
        }
    }
`;
const StyleCol2 = styledComponents(Col)`
    &&&{
        
        height: 100px;
        text-align: right;
        line-height: 100px;
        padding: 0 30px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        button{
          margin-right: 10px;
          background:#f0f2f5 ;
          border:none;
        }
        .avataGroup{
          line-height: 100px;
          
        }
    }
`;
const StyleCol3 = styledComponents(Col)`
     &&&{
         position: relative;
         height: calc(100vh - 110px);
         button{
             width: 90%;
             margin-right: 20px;
             height: 50px;
         }
         input{
             display: block;
             height: 50px;
             width: 90%;
             margin-left: 30px;
         }
     }
`;

const MessContainer = styledComponents.div`
       height: 92%;
       overflow-y: scroll;
       display: flex;
       flex-direction: column-reverse;
      
    `;
 export{StyleCol1,StyleCol2,StyleCol3,MessContainer};