

const vm = this; 
const {QueryOptions} = Models;
const {first} = rxjs;
const { FormControl, Validators } = forms;

//test commit

return class GenClass extends vm.constructor {
    
    faq_tab_index = 0;
    selected_cat_id = 0;
    search = '';
    loaded = false;
    today = new Date()

    detail={}
    
     
            query_report$its_report_write_us=[];
	    

    
    edit_fields = [];
    table;
    numbers = [];
    reports = [];
    export_url = "";
    
    query_options = {
	    'report$its_report_write_us': new QueryOptions('report$its_report_write_us'),
    };
    
    fields = {
	    'report$its_report_write_us': null,
    };

    items = [{
        label: 'File',
        items: [
            {label: 'New', icon: 'pi pi-plus'},
            {label: 'Open', icon: 'pi pi-download'}
        ]
    },
    {
        label: 'Edit',
        items: [
            {label: 'Undo', icon: 'pi pi-refresh'},
            {label: 'Redo', icon: 'pi pi-repeat'}
        ]
    }];
    
    
    form = this.formBuilder.group({});
    get f() { return this.form.controls; }
    
    
    getFields(query_code) {
        
        this.fields[query_code] = [];
        
        
            
        this.fields[query_code].push({
            title: 'Номер обращения' || 'Номер обращения',
            alias: 'docnum',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: null,
            _data_type_code: 'varchar',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Дата создания' || 'Дата создания',
            alias: 'created_at',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: null,
            _data_type_code: 'current_datetime',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Оператор' || 'Оператор',
            alias: 'created_by',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: 'users_select',
            _data_type_code: 'reference',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Должность' || 'Должность',
            alias: 'staff_position_id',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: 'staff_position_select',
            _data_type_code: 'reference',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Департамент' || 'Департамент',
            alias: 'company_id',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: 'deps_select',
            _data_type_code: 'reference',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Статус обращения' || 'Статус обращения',
            alias: 'req_stat',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: null,
            _data_type_code: 'varchar',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Идентификатор обращения' || 'Идентификатор обращения',
            alias: 'id',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: null,
            _data_type_code: 'serial',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Ф.И.О. потребителя' || 'Ф.И.О. потребителя',
            alias: 'fio',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: null,
            _data_type_code: 'varchar',
        });
            
        
            
        this.fields[query_code].push({
            title: 'ИИН' || 'ИИН',
            alias: 'iin',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: null,
            _data_type_code: 'varchar',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Дата рождения' || 'Дата рождения',
            alias: 'birthdate',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: null,
            _data_type_code: 'date',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Вопрос заданный потребителем' || 'Вопрос заданный потребителем',
            alias: 'text',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: null,
            _data_type_code: 'longtext',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Регион' || 'Регион',
            alias: 'region_id',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: 'c_r_addressregion_select',
            _data_type_code: 'reference',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Тематика обращения' || 'Тематика обращения',
            alias: 'type_id',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: 'c_r_theme_select',
            _data_type_code: 'reference',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Обращение в другое подразделение' || 'Обращение в другое подразделение',
            alias: 'other_dep',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: 'c_r_other_deps_select',
            _data_type_code: 'reference',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Дата ответа на служебную записку' || 'Дата ответа на служебную записку',
            alias: 'memo_get',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: null,
            _data_type_code: 'date',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Дата отправки служебной записки' || 'Дата отправки служебной записки',
            alias: 'memo_sent',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: null,
            _data_type_code: 'date',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Обращение в Базу знаний' || 'Обращение в Базу знаний',
            alias: 'req_bol',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: null,
            _data_type_code: 'boolean',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Срок предоставления ответа' || 'Срок предоставления ответа',
            alias: 'time_get',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: null,
            _data_type_code: 'varchar',
        });
            
        
            
        this.fields[query_code].push({
            title: 'Вид обращения' || 'Вид обращения',
            alias: 'appeal_subj',
            show_filter: '1',
            is_advanced: 0,
            _def_sel_query_code: 'c_type_req_2_select',
            _data_type_code: 'reference',
        });
            
        
        
    };
    
    export(tpl_id){
	    
	     
	    
		this.export_url = '?code=report$its_report_write_us';
		
		 
		//+'&preparam1='+ 			   ($scope.param$79?$scope.param$79:'')
		 
		//+'&preparam2='+ 			   ($scope.param$80?$scope.param$80:'')
		
		
		
		
		for(const query_code of Object.keys(this.query_options)) {
		    this.export_url = '?' + this.query_options[query_code].url;
		}
		
        this.appComponent.bpRun("report_exp_result",{ tpl_id : tpl_id, url: this.export_url, report_id:  60 }, (data) => this.bindCallBack(data));
        
        
    }
        
    bindCallBack(){
        this.bind();
    }
    
    clearPeriodParams(){
      this.f['param$79'].setValue()
      this.f['param$80'].setValue()
      this.f['param$81'].setValue([])
      this.f['param$82'].setValue([])
      this.f['param$year'].setValue([])
      this["query_report$its_report_write_us"] = [];
    }
    
    
    hasData(alias){
      return this["query_report$its_report_write_us"].some(item => {
            const val = item[alias];
            return val !== null && val !== undefined && val !== '';
          });
    }


    
    ngOnInit(){

            let item = this.formBuilder.group({});
		     
		        item.addControl('param$79', this.formBuilder.control(''));
			 
		        item.addControl('param$80', this.formBuilder.control(''));
		        
		        item.addControl('param$81', this.formBuilder.control(''));
		        
		        item.addControl('param$82', this.formBuilder.control(''));
		        
		        item.addControl('periodTypeRadio', this.formBuilder.control(''));
		        
		        item.addControl('param$year', this.formBuilder.control(''));
		        
			this.form = item;
			this.loaded = true;
			
        //this.getReports();
    };

    ngOnDestroy() {
        // 
    }
    
    get filter_faq() {
        return this.faqs.filter(x => x.title.match(this.search) || x.answer.match(this.search));
    }


    bind (){
		    
	    
	    
	    let option = this.query_options['report$its_report_write_us'];
	    
	     option.preparam1 = this.f['param$79'].value ? this.f['param$79'].value : ''; 
	     option.preparam2 = this.f['param$80'].value ? this.f['param$80'].value : '';
	     option.preparam3 = this.f['param$81'].value ? this.f['param$81'].value : '';
	     option.preparam4 = this.f['param$82'].value ? this.f['param$82'].value : '';
         option.preparam5 = this.f['param$year'].value ? this.f['param$year'].value : '';
        
        
        console.log(this.f['param$82'].value);
	    this.dbQueryService.getQuery(option)
    	    .subscribe((resp) => {
                if(resp && resp.items) {
                    this["query_report$its_report_write_us"] = resp.items;
                    
                    if (! this.fields['report$its_report_write_us']) {
                        this.getFields('report$its_report_write_us');
                    }
                }else{
                    this["query_report$its_report_write_us"] = [];
                }
            });
		
	}

    setFaq(cat_id) {
        option.flteq.cat_id = cat_id;
        this.dbQueryService.getQuery(option)
        // this.dbQueryService.getQuerySelect('c_faq&flt$cat_id$eq='+cat.id, '')
            .subscribe((resp) => {
                if  (resp && resp.items){
                    this.faqs = resp.items;
                    this.selected_cat_id = cat_id;
                }
            });
    }
    
    
    getReports() {
        let option = new QueryOptions('reports');
        this.dbQueryService.getQuery(option)
        // this.dbQueryService.getQuerySelect('c_faq_cat', '')
            .subscribe((resp) => {
                if  (resp && resp.items){
                    
                    this.reports = resp.items;

                }
            });
    }
    
    
    sortByField(field, query_code) {
        if(!this.query_options[query_code]) {
            return;
        }
        if(this.query_options[query_code].orderBy != field.alias) {
            this.query_options[query_code].orderAsc = 0;
            this.query_options[query_code].orderBy = field.alias;
        } else {
            if(this.query_options[query_code].orderAsc == 0) {
                this.query_options[query_code].orderAsc = 1;
                this.query_options[query_code].orderBy = field.alias;
            } else {
                this.query_options[query_code].orderBy = null;
            }
        }
        
        this.bind();
    }

    
}

