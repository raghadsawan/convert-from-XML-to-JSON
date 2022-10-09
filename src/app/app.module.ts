// public static object FromXML(string xml)
// {
    //try
    //{

    //    XmlDocument doc = new XmlDocument();
    //    doc.LoadXml(xml);
    //    string jsonText = JsonConvert.SerializeXmlNode(doc);
    //    object z = JsonConvert.DeserializeObject<ExpandoObject>(jsonText);

    //}
    //catch (Exception ex)
    //{

    //}
    //try
    //{
    //    Logger.Information("Serialize L 120");
    //    Logger.Information(xml);



    //    XmlDocument doc = new XmlDocument();
    //    doc.LoadXml(xml);
    //    Logger.Information(doc.ToString());



    //    string jsonText = JsonConvert.SerializeXNode(doc.SelectNodes(@"X_EMP_DTLS_TAB\X_EMP_DTLS_TAB_ITEM"));
    //    Logger.Information(jsonText);
    //    return JsonConvert.DeserializeObject<ExpandoObject>(jsonText);
    //}
    //catch (Exception ex)
    //{
    //    Logger.Error(ex, "Serialize L 132");
    //}

//     try
//     {
//         Logger.Information("Serialize L 120");
//         Logger.Information(xml);



//         XmlDocument doc = new XmlDocument();
//         doc.LoadXml(xml);



//         XmlNodeList nodeList = doc.GetElementsByTagName(@"X_EMP_DTLS_TAB_ITEM");



//         Logger.Information(doc.ToString());



//         string jsonText = JsonConvert.SerializeXmlNode(nodeList.Item(0));
//         Logger.Information(jsonText);


//         object obj =  JsonConvert.DeserializeObject(jsonText);

//     }
//     catch (Exception ex)
//     {
//         Logger.Error(ex, "Serialize L 132");
//     }
//     return null;
// }



// --------------------------------------


// var xml = @"<?xml version = '1.0' encoding = 'UTF-8'?>
// <OutputParameters xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns='http://xmlns.oracle.com/apps/per/rest/XXHRLMSDATA/export_emp_details/'>
// <X_EMP_DTLS_TAB>
// <X_EMP_DTLS_TAB_ITEM>
//     <EMPLOYEE_NUMBER>HR100019</EMPLOYEE_NUMBER>
//     <EMPLOYEE_NAME>محمد زكي أحمد ارشيد</EMPLOYEE_NAME>
//     <MANAGER>HR100018</MANAGER>
//     <DEPARTMENT>HR.دائرة الموارد البشرية لحكومة عجمان</DEPARTMENT>
//     <UNIT>HR.قسم معلومات الموارد البشرية</UNIT>
//     <SECTION>HR.قسم معلومات الموارد البشرية</SECTION>
//     <JOB>موظف</JOB>
//     <POSITION>استشاري انظمة موارد بشرية</POSITION>
//     <GRADE>عقد خاص - امتيازات درجة رابعة</GRADE>
//     <HIRE_DATE>09-SEP-2018</HIRE_DATE>
//     <PHOTO xsi:nil='true'/>
//     <USER_NAME>HR100019</USER_NAME>
//     <MANAGER_USER_NAME>HR100018</MANAGER_USER_NAME>
//     <POS_CATEGORY>الفنية والمهنية</POS_CATEGORY>
//     <MAIN_POSITION_GROUP>تقنية المعلومات</MAIN_POSITION_GROUP>
//     <SUP_POSITION_GROUP>تطوير نظم المعلومات</SUP_POSITION_GROUP>
//     <JOB_TYPE>أساسية</JOB_TYPE>
//     <EVALUATION_JOB_GRADE>310</EVALUATION_JOB_GRADE>
//     <EVALUATION_JOB_RULES>الأخصائيون</EVALUATION_JOB_RULES>
//     <ENGLISH_NAME>MOHAMMAD ZAKI AHMAD IRSHED</ENGLISH_NAME>
//     <EMIRATES_ID>784197590963845</EMIRATES_ID>
//     <ASSIGNMENT_CATEGORY>موظف دائم</ASSIGNMENT_CATEGORY>
//     <LOCAL_NON_LOCAL>NON_LOCAL</LOCAL_NON_LOCAL>
//     <SUPERVISOR_NAME>صفيه محمد خليفة الشحي</SUPERVISOR_NAME>
//     <EDUCATION_LEVEL>جامعي</EDUCATION_LEVEL>
//     <EDUCATION_TYPE xsi:nil='true'/>
//     <SPECIALIZATION>انظمة معاومات حاسوبية</SPECIALIZATION>
//     <EMAIL>mohammad.irshed@Ajman.ae</EMAIL>
//     <PHONE>11112222</PHONE>
//     <PERSON_ID>43689</PERSON_ID>
//     <SUPERVISOR_ID>43653</SUPERVISOR_ID>
//     <ORGANIZATION_ID>3076</ORGANIZATION_ID>
// </X_EMP_DTLS_TAB_ITEM>
// </X_EMP_DTLS_TAB>
// <P_MGS_OUT>Success</P_MGS_OUT>
// </OutputParameters>";

//     FromXML(xml);