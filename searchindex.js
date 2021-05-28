Search.setIndex({docnames:["index","main","modules/helperFunctions","modules/helperFunctions.compare_sets","modules/helperFunctions.database","modules/helperFunctions.docker","modules/helperFunctions.fileSystem","modules/helperFunctions.install","modules/helperFunctions.logging","modules/helperFunctions.mongo_config_parser","modules/helperFunctions.mongo_task_conversion","modules/helperFunctions.object_storage","modules/helperFunctions.pdf","modules/helperFunctions.process","modules/helperFunctions.tag","modules/helperFunctions.uid","modules/helperFunctions.web_interface","modules/helperFunctions.yara_binary_search","modules/objects","modules/objects.file","modules/web_interface","modules/web_interface.rest","modules/web_interface.rest.helper"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["index.rst","main.rst","modules/helperFunctions.rst","modules/helperFunctions.compare_sets.rst","modules/helperFunctions.database.rst","modules/helperFunctions.docker.rst","modules/helperFunctions.fileSystem.rst","modules/helperFunctions.install.rst","modules/helperFunctions.logging.rst","modules/helperFunctions.mongo_config_parser.rst","modules/helperFunctions.mongo_task_conversion.rst","modules/helperFunctions.object_storage.rst","modules/helperFunctions.pdf.rst","modules/helperFunctions.process.rst","modules/helperFunctions.tag.rst","modules/helperFunctions.uid.rst","modules/helperFunctions.web_interface.rst","modules/helperFunctions.yara_binary_search.rst","modules/objects.rst","modules/objects.file.rst","modules/web_interface.rst","modules/web_interface.rest.rst","modules/web_interface.rest.helper.rst"],objects:{"helperFunctions.compare_sets":{iter_element_and_rest:[3,1,1,""],remove_duplicates_from_list:[3,1,1,""],substring_is_in_list:[3,1,1,""]},"helperFunctions.database":{ConnectTo:[4,2,1,""],is_sanitized_entry:[4,1,1,""]},"helperFunctions.docker":{run_docker_container:[5,1,1,""]},"helperFunctions.fileSystem":{file_is_empty:[6,1,1,""],get_relative_object_path:[6,1,1,""],get_src_dir:[6,1,1,""],get_template_dir:[6,1,1,""]},"helperFunctions.install":{InstallationError:[7,3,1,""],OperateInDirectory:[7,2,1,""],apt_install_packages:[7,1,1,""],apt_remove_packages:[7,1,1,""],apt_update_sources:[7,1,1,""],check_if_command_in_path:[7,1,1,""],check_string_in_command_output:[7,1,1,""],dnf_install_packages:[7,1,1,""],dnf_remove_packages:[7,1,1,""],dnf_update_sources:[7,1,1,""],install_github_project:[7,1,1,""],load_main_config:[7,1,1,""],log_current_packages:[7,1,1,""],pip3_install_packages:[7,1,1,""],pip3_remove_packages:[7,1,1,""],remove_folder:[7,1,1,""]},"helperFunctions.logging":{ColoringFormatter:[8,2,1,""],TerminalColors:[8,2,1,""],color_string:[8,1,1,""]},"helperFunctions.logging.ColoringFormatter":{LOG_LEVEL_COLORS:[8,4,1,""],format:[8,5,1,""]},"helperFunctions.logging.TerminalColors":{BLUE:[8,4,1,""],BOLD:[8,4,1,""],ENDC:[8,4,1,""],FAIL:[8,4,1,""],GREEN:[8,4,1,""],HEADER:[8,4,1,""],OKBLUE:[8,4,1,""],OKGREEN:[8,4,1,""],PURPLE:[8,4,1,""],RED:[8,4,1,""],UNDERLINE:[8,4,1,""],WARNING:[8,4,1,""],YELLOW:[8,4,1,""]},"helperFunctions.mongo_config_parser":{get_mongo_path:[9,1,1,""]},"helperFunctions.mongo_task_conversion":{check_for_errors:[10,1,1,""],convert_analysis_task_to_fw_obj:[10,1,1,""],create_analysis_task:[10,1,1,""],create_re_analyze_task:[10,1,1,""],get_file_name_and_binary_from_request:[10,1,1,""]},"helperFunctions.object_storage":{update_included_files:[11,1,1,""],update_virtual_file_path:[11,1,1,""]},"helperFunctions.pdf":{build_pdf_report:[12,1,1,""]},"helperFunctions.process":{ExceptionSafeProcess:[13,2,1,""],check_worker_exceptions:[13,1,1,""],complete_shutdown:[13,1,1,""],new_worker_was_started:[13,1,1,""],start_single_worker:[13,1,1,""],terminate_process_and_children:[13,1,1,""]},"helperFunctions.process.ExceptionSafeProcess":{exception:[13,6,1,""],run:[13,5,1,""]},"helperFunctions.tag":{TagColor:[14,2,1,""]},"helperFunctions.tag.TagColor":{ALL:[14,4,1,""],BLUE:[14,4,1,""],DARK:[14,4,1,""],GRAY:[14,4,1,""],GREEN:[14,4,1,""],LIGHT:[14,4,1,""],LIGHT_BLUE:[14,4,1,""],ORANGE:[14,4,1,""],RED:[14,4,1,""]},"helperFunctions.uid":{create_uid:[15,1,1,""],is_list_of_uids:[15,1,1,""],is_uid:[15,1,1,""]},"helperFunctions.web_interface":{apply_filters_to_query:[16,1,1,""],cap_length_of_element:[16,1,1,""],filter_out_illegal_characters:[16,1,1,""],format_time:[16,1,1,""],get_alternating_color_list:[16,1,1,""],get_color_list:[16,1,1,""],get_template_as_string:[16,1,1,""],password_is_legal:[16,1,1,""]},"helperFunctions.yara_binary_search":{YaraBinarySearchScanner:[17,2,1,""],get_yara_error:[17,1,1,""],is_valid_yara_rule_file:[17,1,1,""]},"helperFunctions.yara_binary_search.YaraBinarySearchScanner":{get_binary_search_result:[17,5,1,""]},"objects.file":{FileObject:[19,2,1,""]},"objects.file.FileObject":{add_included_file:[19,5,1,""],add_virtual_file_path_if_none_exists:[19,5,1,""],analysis_exception:[19,4,1,""],analysis_tags:[19,4,1,""],binary:[19,4,1,""],comments:[19,4,1,""],create_binary_from_path:[19,5,1,""],depth:[19,4,1,""],file_name:[19,4,1,""],file_path:[19,4,1,""],files_included:[19,4,1,""],get_hid:[19,5,1,""],get_root_uid:[19,5,1,""],get_virtual_file_paths:[19,5,1,""],get_virtual_paths_for_all_uids:[19,5,1,""],get_virtual_paths_for_one_uid:[19,5,1,""],list_of_all_included_files:[19,4,1,""],parent_firmware_uids:[19,4,1,""],parents:[19,4,1,""],processed_analysis:[19,4,1,""],root_uid:[19,4,1,""],scheduled_analysis:[19,4,1,""],set_binary:[19,5,1,""],sha256:[19,4,1,""],size:[19,4,1,""],temporary_data:[19,4,1,""],uid:[19,6,1,""],virtual_file_path:[19,4,1,""]},"web_interface.rest":{helper:[22,0,0,"-"]},"web_interface.rest.helper":{convert_rest_request:[22,1,1,""],error_message:[22,1,1,""],get_boolean_from_request:[22,1,1,""],get_current_gmt:[22,1,1,""],get_paging:[22,1,1,""],get_query:[22,1,1,""],get_update:[22,1,1,""],success_message:[22,1,1,""]},helperFunctions:{compare_sets:[3,0,0,"-"],database:[4,0,0,"-"],docker:[5,0,0,"-"],fileSystem:[6,0,0,"-"],install:[7,0,0,"-"],logging:[8,0,0,"-"],mongo_config_parser:[9,0,0,"-"],mongo_task_conversion:[10,0,0,"-"],object_storage:[11,0,0,"-"],pdf:[12,0,0,"-"],process:[13,0,0,"-"],tag:[14,0,0,"-"],uid:[15,0,0,"-"],web_interface:[16,0,0,"-"],yara_binary_search:[17,0,0,"-"]},objects:{file:[19,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","exception","Python exception"],"4":["py","attribute","Python attribute"],"5":["py","method","Python method"],"6":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:exception","4":"py:attribute","5":"py:method","6":"py:property"},terms:{"0":[6,7,19],"00ff00":16,"04":1,"0m":8,"1":19,"10":[1,16],"18":1,"19":1,"1m":8,"2":19,"200":22,"2019":1,"300":5,"4":1,"400":22,"4m":8,"55":16,"9":1,"91m":8,"92m":8,"93m":8,"94m":8,"95m":8,"boolean":[7,22],"byte":[1,6,10,15,17,19,22],"case":[1,13],"class":[4,7,8,13,14,16,17,19],"default":[19,22],"do":1,"float":[16,19],"function":[1,11,13,17,19,22],"int":[5,13,16,22],"new":[0,3,10,13,19],"public":17,"return":[3,4,5,6,7,8,9,10,11,12,13,15,16,17,19,22],"true":[3,4,5,6,7,8,13,15,16,17,19],"try":[1,17],"while":19,A:[1,3,4,8,10,11,13,14,16,17,19],As:19,At:1,For:[1,7,12,19],If:[1,7,13,16,19],In:[1,13],Is:13,It:[1,19],No:1,Not:19,On:7,Or:1,That:19,The:[0,1,3,6,8,9,10,12,13,16,17,19,22],There:1,These:6,_t:3,abl:1,about:1,absolut:6,accept:16,access:13,acknowledg:0,across:[11,19],activ:1,ad:[1,13],add:[16,19],add_included_fil:19,add_virtual_file_path_if_none_exist:19,addition:[6,19],adher:22,administr:7,affect:7,after:[5,7,8,16,19],afterward:[1,7],again:1,aggreg:19,all:[1,3,7,11,12,13,14,15,17,19],allow:[7,13,17],almost:1,along:19,alreadi:[7,10,11,16],also:[3,19],altern:16,alwai:[13,19],an:[1,3,6,7,10,11,12,13,16,17,19],analysi:[0,10,12,13,19,22],analysis_d:19,analysis_except:19,analysis_tag:19,analysis_task:10,analyst:1,analyz:1,ani:[1,3,4,8,10,13,16,19],anystr:15,api:[0,1,22],apply_filters_to_queri:16,approach:1,appropri:1,apt:7,apt_install_packag:7,apt_remove_packag:7,apt_update_sourc:7,ar:[1,7,10,13,15,17,19],arbitrari:19,architectur:1,archiv:19,arg:13,argument:19,ask:1,associ:19,author:[0,19],autom:[0,1],automat:[1,8],avail:1,awai:1,back:[7,19],backend:13,bad:22,base:[1,4,7,8,10,12,13,14,17,19],becaus:1,been:19,befor:[1,13],begin:16,behavior:16,being:19,belong:19,below:1,binari:[15,19,22],binwalk:1,blow:1,blue:[8,14,16],board:1,bold:8,bool:[3,4,5,6,7,13,15,16,17,22],boot:1,bsi:1,bug:1,build:12,build_pdf_report:12,c:7,cad:7,call:12,callabl:13,can:[1,11,16,19],cancel:5,cap:16,cap_length_of_el:16,care:19,carv:19,carver:1,caus:[16,17],cent:7,certif:1,cf:19,cfg:7,challeng:0,chang:[1,7],charact:16,check:[1,3,4,6,7,10,13,15,16,17],check_for_error:10,check_if_command_in_path:7,check_string_in_command_output:7,check_worker_except:13,child:[13,19],child_path:19,children:[13,19],clone:7,close:19,code:[0,7,22],color:[8,14,16,19],color_str:8,coloringformatt:8,combin:11,command:[5,7],comment:19,common:11,commun:1,compar:[1,13],compare_set:2,comparison:0,compat:[8,16],compil:17,complet:1,complete_shutdown:13,compon:[1,13],comput:19,concept:1,config:[4,7,9,10,13,17],configpars:[7,10,13,17],configur:[4,7,10,13,17],connect:4,connected_interfac:4,connectto:4,consist:19,constructor:4,consum:1,contact:0,contain:[1,3,5,7,8,10,11,12,13,14,15,17,19,22],content:[10,16,17,19],context:[4,7,13,19],contribut:0,convert:[10,22],convert_analysis_task_to_fw_obj:10,convert_rest_request:22,cover:1,cpu:1,creat:[1,6,7,10,12,13,22],create_analysis_task:10,create_binary_from_path:19,create_re_analyze_task:10,create_uid:15,credenti:1,critic:8,crypto:1,current:[7,11,13,19,22],cve:1,cwe:1,cycl:19,danger:14,dark:14,data:[10,15,19,22],databas:[1,2,9,10,11,17,19],databaseinterfac:4,datastructur:22,datefmt:8,debian:[1,7],debug:[1,8,19],defin:[8,19],depend:[1,22],depth:19,detail:[1,12],detect:1,develop:1,devic:[1,16],di:19,dict:[10,11,16,17,19,22],dictionari:[10,22],differ:[1,11,14,16,19],direct:19,directori:[5,6,7,16],disassembl:1,discov:11,displai:[10,13,16],distinguish:7,dnf:7,dnf_install_packag:7,dnf_remove_packag:7,dnf_update_sourc:7,doc:13,docker:[2,12],document:1,doe:13,done:11,drone:0,duplic:3,durat:16,dure:[7,13,19],e:[3,4,6,7,11,13,15,16,19],each:[1,3,19],easi:0,effect:7,either:[1,17,19],element:[3,15,16],elev:5,els:[7,19],empti:[6,12],emul:1,encod:22,endc:8,endpoint:22,engin:12,entri:4,equal:1,equival:7,erron:16,error:[7,8,10,16,17,19,22],error_messag:[10,22],especi:1,etc:19,even:11,everi:19,exampl:[4,7],except:[5,7,13,17,19],exceptionsafeprocess:13,execut:[1,5,7,13],exist:[1,11,19],exit:7,expect:7,expens:19,extend:0,extract:[6,19],extractor:[1,6],fact:[0,1,4,6,7,10,13,17,19,22],fact_cor:[1,7],fact_extract:6,fact_pdf_report:12,fail:[8,22],fall:[7,19],fals:[3,4,5,6,7,13,15,16,17],fandctool:1,favorit:1,featur:1,feder:1,fedora:7,few:1,field:[10,19],file:[1,4,6,7,9,10,11,12,16,17,18],file_is_empti:6,file_nam:19,file_object:19,file_path:[6,9,19],fileobject:[11,19],files_includ:19,filesystem:[2,19],filter:16,filter_out_illegal_charact:16,financ:1,find:[4,7],finish:1,firmwar:[0,4,6,10,11,12,17,19],firmware_uid:19,first:[1,19],fix:1,fkie:[1,7],flag:22,flask:[10,16],flaw:1,fmt:8,focu:[1,17],folder:[7,12],folder_nam:7,follow:1,form:[10,19],format:[1,8,16],format_tim:16,formatt:8,found:[1,3,7,11],fraunhof:1,from:[3,4,6,7,8,9,10,16,19,22],frontenddbinterfac:4,fs:19,fs_uid:19,full:19,further:1,furthermor:1,fuzz:1,g:[3,4,11,13,15,16],gener:[3,4,12,15,19],german:1,get:[1,3,5,6,11,13,16,17,19,22],get_alternating_color_list:16,get_binary_search_result:17,get_boolean_from_request:22,get_color_list:16,get_current_gmt:22,get_file_name_and_binary_from_request:10,get_hid:19,get_mongo_path:9,get_pag:22,get_queri:22,get_relative_object_path:6,get_root_uid:19,get_src_dir:6,get_template_as_str:16,get_template_dir:6,get_upd:22,get_virtual_file_path:19,get_virtual_paths_for_all_uid:19,get_virtual_paths_for_one_uid:19,get_yara_error:17,ghusernam:7,git:1,github:[1,7],given:[7,12,16,17,19],go:1,grai:14,green:[8,14,16],group:13,gui:1,guidelin:[1,22],ha:[6,19],handl:[7,13],happen:[7,13],hard:1,hash:[16,19],hash_length:19,have:[1,6,14,19],header:8,hear:1,helper:[20,21],hesit:1,hex:16,hexadecim:16,hi:1,hid:[16,19],hid_el:16,hold:19,host:[7,19],how:1,howev:1,html:16,http:22,human:19,hunt:1,i:[6,7,19],identif:1,identifi:[1,7,10,15,16,19,22],illeg:16,imag:[5,11,19],immutablemultidict:22,impervi:13,implement:[1,12],improv:1,includ:[5,7,11,17,19,22],include_stderr:5,incorpor:1,increment:19,index:[0,13],indic:7,info:[8,14],inform:[1,19,22],inherit:19,input:[3,15],input_data:15,input_list:15,input_str:15,ins:1,insid:[11,12,19],instal:[0,2],install_github_project:7,installationerror:7,instanc:[1,13],instead:13,integ:22,integr:0,intend:[0,4,10],interfac:[4,16],intermedi:6,intern:19,investig:1,iot:0,is_list_of_uid:15,is_sanitized_entri:4,is_uid:15,is_valid_yara_rule_fil:17,issu:1,item:3,iter:[3,7,13],iter_element_and_rest:3,its:[5,7,13,19],itself:19,jinja2:12,join:11,json:[16,22],kali:[1,7],kei:[1,19],kind:1,know:1,knowledg:1,known:1,kwarg:13,label:[5,13],larg:4,latest:0,latex:12,layer:[1,19],lead:1,least:[1,19],length:[16,19],level:[8,11,19],licens:1,light:14,light_blu:14,like:[1,19],limit:[16,22],link:11,list:[1,3,7,8,11,13,14,15,16,17,19,22],list_:3,list_of_all_included_fil:19,live:1,load_main_config:7,local:[1,19],log:[2,5,7,13],log_current_packag:7,log_level_color:8,logic:11,login:1,logrecord:8,look:[1,19],lot:[1,19],love:1,lower:19,machin:19,made:19,mai:[13,14],mail:1,main:[1,7],make:[7,13],manag:[4,7],mani:1,manual:1,manufactur:1,map:19,massiv:1,match:[7,13,17],materi:1,matter:1,maximum:16,mean:[4,19],memori:19,messag:[10,13,17,19,22],meta:[19,22],method:17,might:[1,16,19,22],minor:1,mint:7,miss:10,modul:[0,2,18,20,21],mongo_config_pars:2,mongo_task_convers:2,mongodb:[4,9,16,22],more:1,most:22,mount:5,much:1,multipl:[1,11,19],multiprocess:13,must:[1,8],name:[5,10,13,16,19,22],neat:22,necessari:7,necessarili:19,need:[1,6],new_object:11,new_process:13,new_worker_was_start:13,newfound:11,newli:11,next:[1,19],none:[5,8,13,17,19,22],ntp:22,number:[7,16,19],object:[3,6,7,8,10,11,12,14,16,17],object_storag:2,occur:[5,13,19],occurr:19,offer:22,offic:1,offset:[6,22],offset_path:6,ok:22,okblu:8,okgreen:8,old:13,old_object:11,old_process:13,onc:11,one:[12,19],ones:11,onli:[3,11,15,17,19],open:4,operateindirectori:7,oppos:13,option:[5,7,13,16,17,19,22],orang:14,origin:1,os:1,other:[3,8],otherwis:[3,4,6,13,15,16,17],our:1,out:[1,7,16],outer:19,output:[5,7,8],over:[3,13],overview:12,own:1,pack:19,packag:7,page:[0,12,22],pair:19,param:17,paramet:[3,4,5,6,7,8,9,10,11,12,13,15,16,17,19,22],parent:19,parent_firmware_uid:19,parent_path:19,parent_uid:19,pars:22,part:[1,19],partli:1,pass:[4,13],password:[1,16],password_is_leg:16,patch:11,path:[6,7,9,11,12,16,19],path_inside_contain:5,pathlib:[6,7,12],pattern:[1,17],pdf:2,perform:17,persist:19,pictur:1,pip3_install_packag:7,pip3_remove_packag:7,pipe:19,placehold:19,platform:1,pleas:1,plug:[0,1],plugin:[19,22],plugin_nam:19,plugin_vers:19,possibl:[1,3],potenti:1,predecessor:19,present:[1,16,19],previou:7,primari:[14,19],print:8,privat:1,privileg:5,probabl:19,problem:7,process:[1,2],process_index:13,process_list:13,processed_analysi:19,program:[1,7],project:7,project_path:7,propag:19,properti:[13,19],provid:[1,3,17],pull:1,purpl:8,purpos:19,pw:16,python:[7,13,22],qemu:1,queri:[4,16,22],question:1,rais:[5,13],re:[1,5,13],readabl:19,readm:1,reason:22,reconstruct:13,record:8,recurs:19,red:[8,14],redhat:7,refer:12,rel:6,relat:[6,19],remain:3,remot:7,remov:[3,6,7],remove_duplicates_from_list:3,remove_fold:7,render:12,repositori:1,repres:[7,16,19,22],represent:19,request:[1,10,16,22],request_data:22,request_paramet:22,requir:11,rerais:[5,13],respect:[8,13],respons:22,rest:[0,1,3,20],restart:13,result:[1,12,17,19,22],result_dict:19,retriev:[6,9,10,13,22],return_cod:22,rf:7,right:[1,7],risk:1,rm:7,root:[6,19],root_uid:19,router:0,rule:17,rules_fil:17,run:[5,7,13,19],run_docker_contain:5,s:[1,6,19],same:[11,13],sampl:1,sanit:4,scan:17,schedul:[13,19],scheduled_analysi:19,screenshot:0,script:1,search:[0,1,17],searchabl:1,second:16,secondari:14,secur:[0,1],see:[1,13],select:16,self:[4,19],send:13,separ:19,servic:1,set:[7,13,15,17,19],set_binari:19,sha256:19,sha256_siz:15,shall:[0,22],share:1,should:[7,19],shutdown:13,sign:19,signal:13,similar:19,sinc:1,singl:[17,19],size:[6,19],so:[1,16,19],softwar:1,solv:1,some:[1,6,11,19],sourc:0,source_path:5,specif:[19,22],specifi:[5,8,19],speedup:1,squashf:19,src:[6,7],stack:13,start:[1,13],start_single_work:13,state:11,statu:22,stderr:5,stdout:7,stop:8,storag:[4,19],store:[1,10,19],str:[3,5,6,7,8,9,10,13,15,16,17,19,22],string:[3,7,8,15,16,17,19,22],structur:[5,19],style:[7,8],subclass:8,submodul:1,subprocess:13,substr:3,substring_is_in_list:3,substring_list:3,subtyp:13,success:[14,22],success_messag:22,sudo:7,suggest:13,summari:19,support:1,swap:4,sym:11,symlink:19,system:[0,4,7,22],tag:[2,19],tag_nam:19,tagcolor:14,take:19,tar:19,target:22,target_directori:7,target_str:7,targeted_url:22,task:[1,10,17],task_kei:10,technic:12,tell:1,templat:[6,12,16],temporari:[6,19],temporary_data:19,termin:[8,13],terminalcolor:8,terminate_process_and_children:13,test:7,text:8,thei:[1,5],themselv:19,therebi:0,therefor:1,thi:[1,7,8,11,13,17,19,22],this_files_current_vfp:19,throw_except:13,thu:[11,19],time:[1,11,19,22],timeout:[5,7],timestamp:22,too:4,tool:[0,1,12],total:19,tough:1,trace:13,tree:19,tupl:[3,5,7,8,10,13,17,19,22],twitter:1,type:[3,4,5,6,7,8,9,10,11,12,13,15,16,17,19,22],ubuntu:[1,7],uefi:0,ui:[0,19],uid:[2,10,17,19],under:1,underlin:8,unexpect:16,union:[7,15,17],uniqu:[3,10,15,17,19],unix:[19,22],unpack:[1,6,13,19],up:19,updat:[7,11,16,22],update_included_fil:11,update_virtual_file_path:11,url:22,us:[0,4,5,7,8,13,19,22],usual:19,util:1,valid:[8,15,17],valu:[7,13,16,17,19,22],vendor:16,veri:1,version:[1,19],vfp:19,view_nam:16,virtual:[11,16,19],virtual_file_path:19,vulner:1,wa:[4,7,13,16,19],wai:1,want:1,warn:[8,14],we:1,web:[0,1,16],web_interfac:2,webcam:0,webinterfac:10,welcom:1,well:1,werkzeug:22,what:13,when:1,where:1,whether:16,which:[1,5,7,12,16],whole:1,whose:22,why:22,witch:16,without:[1,16],work:7,worker:13,worker_funct:13,worker_label:13,would:[1,19],wrapper:22,write:1,x1b:8,yaml:9,yara:17,yara_binary_search:2,yara_rul:17,yarabinarysearchscann:17,yellow:[8,16],yet:13,you:[1,19],your:1},titles:["About","Challenges","helperFunctions","helperFunctions.compare_sets module","helperFunctions.database module","helperFunctions.docker module","helperFunctions.fileSystem module","helperFunctions.install module","helperFunctions.logging module","helperFunctions.mongo_config_parser module","helperFunctions.mongo_task_conversion module","helperFunctions.object_storage module","helperFunctions.pdf module","helperFunctions.process module","helperFunctions.tag module","helperFunctions.uid module","helperFunctions.uid web_interface","helperFunctions.yara_binary_search module","objects","objects.file module","web_interface","web_interface.rest","web_interface.rest.helper module"],titleterms:{"new":1,about:[0,12],acknowledg:1,affect:1,analysi:1,author:1,challeng:1,code:1,compare_set:3,comparison:1,contact:1,content:0,contribut:1,databas:4,docker:5,easi:1,extend:1,extract:1,file:19,filesystem:6,find:1,firmwar:1,helper:22,helperfunct:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],imag:1,indic:0,initi:1,instal:[1,7],integr:1,latest:1,log:8,modul:[3,4,5,6,7,8,9,10,11,12,13,14,15,17,19,22],mongo_config_pars:9,mongo_task_convers:10,object:[18,19],object_storag:11,other:1,pdf:12,process:13,report:12,rest:[21,22],screenshot:1,sourc:1,tabl:0,tag:14,uid:[15,16],us:1,web_interfac:[16,20,21,22],yara_binary_search:17}})