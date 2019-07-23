const tech = [
  'HTML',
  'CSS',
  'CSS3',
  'Responsive',
  'Node.js',
  'Javascript',
  'Vue',
  'Vue-Router',
  'Vuex',
  'React'
];

const education = [
  {
    title: '명지대학교',
    startDate: '2003.03',
    endDate: '2007.02',
    descList: ['영상디자인 학과 입학', '고려사이버 대학교 편입']
  },
  {
    title: '고려사이버 대학교',
    startDate: '2006.03',
    endDate: '2011.08',
    descList: ['디지털미디어디자인학 / 미술학사']
  }
];

const experience = [
  {
    title: '(주)엘비씨 소프트',
    startDate: '2000.11',
    endDate: '2010.12',
    descList: ['플래시 개발: GPS(위치정보) 기반 지도 서비스 개발 및 유지 보수']
  },
  {
    title: '(주)시공미디어',
    startDate: '2011.06',
    endDate: '2012.02',
    descList: ['플래시 개발: 교육컨텐츠 개발 리뉴얼 및 유지 보수']
  },
  {
    title: 'GAAD Corporation',
    startDate: '2012.02',
    endDate: '2012.06',
    descList: ['인턴: UI 개발자']
  },
  {
    title: '(주)상상스토리',
    startDate: '2012.10',
    endDate: '2013.07',
    descList: ['플래시 개발: 플래시 게임 개발, 유지, 보수']
  },
  {
    title: '(주)메가존 INEX팀',
    startDate: '2013.10',
    endDate: '2015.01',
    descList: [
      '플래시 개발자: 네스까페 일산 전자랜드 플래시 키오스크 컨텐츠 제작, 운영',
      '네스까페 이태원 Digital Play Ground 컨텐츠 제작, 운영',
      '플래시 교육 컨텐츠 새로운 버전으로 제작 및 운영',
      '경기대학교 평생교육원 학습컨텐츠 시스템 개발, 유지, 보수'
    ]
  },
  {
    title: '(주)메가존 펜타클',
    startDate: '2015.02',
    endDate: '2018.현재',
    descList: [
      '경기대학교 평생교육원 학습컨텐츠 시스템 개발, 유지, 보수',
      '메가존 교육사업부 사내교육 컨텐츠 개발, 유지, 보수',
      'JavaScript 교육, 전파',
      'Vue 도입, 교육'
    ]
  }
];

const portfolio = [
  {
    title: '경기대학교 원격 교육원 플래시 강의 제작 플렛폼 개발',
    desc: '경기대학교 원격 교육원 플래시강의 제작 플랫폼 개발, 유지 보수',
    img:
      'http://ekgu.ac.kr/static/images/contents/header_kgu_logo.gif;jsessionid=BD523DC377623D6700B148F4215D1A3A',
    url: 'https://sce.kyonggi.ac.kr/ht_ml/main/index.php'
  },
  {
    title: '네스까페 이태원 디지털 플레이그라운드',
    desc:
      '키오스크 메뉴, 인스타그램 공유 키오스크, 루프탑 관망화면 키오스크 제작, 유지, 보수',
    img:
      'data:image/jpeg;base64,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',
    url: 'https://www.youtube.com/watch?v=qOH7-8XX9h4'
  },
  {
    title: '네스까페 일산 이마트 메뉴안내 키오스크 제작',
    desc: '키오스크 메뉴 개발, 유지, 보수',
    img:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIVFRUVFRUWFRYVFRcXFhcVFRUWFxUWFRYYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLi0BCgoKDg0OGhAQGi0mHyUtLSstLS0tLSstLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstKy0tK//AABEIASsAqAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYABwj/xAA/EAACAQIEAggDBwIEBgMAAAABAhEAAwQSITEFQQYTIlFhcZGxMoGhBxQjUnLB0ULwM2KSsoKiwtLh8RVDo//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAmEQEBAAICAgICAgIDAAAAAAAAAQIRAyESMQRBMlETcSLwFKHR/9oADAMBAAIRAxEAPwDy/G8Vu6o0d2o1EeND7d1hzNWLihjmY9o75TM+ZOgp6LHwqJ8e0flyqJF3dU7naPiedSjDKCJfXuUT9dq9VufZXcGE637whvZMzWipAmJyB/zfKJ9a8yCjMPlTJWzqPhTbmTmPodK6+5YLJJ3/AH5VZtYJ3kopMfFAOgnQmry8CY9XnYAMSJmdMrNIjf4aW5DktBdKeltjoASa0trhFhZks2nLT56jWillrar+GoBO50JPjP7VFzn0ucf7Zexwm40KVKwJlhAIO0E71cyRoeWnpR0jMdCT4HU+MChGJHbb9R33350sctnljJ6QV1OikirQSupYrooBIrop1JQHINasVAm9WAKA6qfGB+EfMe9XRVTih7HmQNTFMUJwOLKDKQSOXqe+up9+2wWRB8h+5muqtJQqvcCaI8Mwt0XEdUnIyt2gSsq2YBh3UZsWFUzlA+QI99vKrtjGuojdfKRHjP761nc/00mH7bHCdLR8V03kc6lFurcTXmA0afKsVjeHo9y46oALjOwUtpDMSArrsdeYqQYkdw7wCJH/AAmuAlZGUa7DQ/ONGqLlVzHGEtYoCEjqyBttMf5v/dDOLX1R7cAqWuaRqJKldZPewq5cKxBHyksv+kwV+VVb1k9kg7aiSGGnIHXw+lKHb0nuXSNHDA9+/tv86RgZ0M6jYf8ATvNc18RDhlP0P8Vc4ZgGeXQgKvJyYOmwK6ilOxaitXsp302J7qHYj428z71fuYy0pfO+VgCNusWfyysgiJ+nyHnUyKvGdoyvRkUkVLlrstWhFFdFSRXEUgZFIaeabFAJbGtWCKiQa05bmpBOx9POi2T2NbSCqXF1BtwfzCrtVOJ/B8x7GqAUt7SDJpaWkp7LTRMpkT2ge8R9RofrUqXAD+X5kD3/AHobd4io7/T9+f0qBuIu2yx46+21Zaa+TR4YScvz0nUeUa/3rUWIskEAwp/5jr3HlUXQ60buJVLlx7aEHMbSqXjuXNovLtHaiPSThy8Oxlq8jfebZl066CGKnK6XMp7USDOm4qvHrafL6DeI4nqWCljtOwMz4HakwV97zaWhkEyx/jnyqv0j4597vG8bVu1oFC21hQB586vdGOJYW2l04l7oaPwltopDEj+ok6ax60tDahcv2mkHrLfllI9N60PQfhOHfO2Ja/ew8hQtsOqi5v8AiQe6IisRJqfCY67aabV25bJ36t2SY78pE71U6K9iXTHh9uxiWGHZjZbtJmBzAc0aQJg+GxFNw9stAAJMDQDwq3heE3b2W9fZ7mckLmclmCmCSWkhZkfI91bjgGECtFtDA/Lh2uHTxZlWmTKYXo5iHEi0Y8aXE9HrqCXgAV7tZe3bs/iMGMa9lVI8CF0EeZry/pxxS07rbtvDAnrBGg2yr57zROy2wj2oNRsK1HFujdxLFu/mBF1sqjTuJJ+UGszjrRBJJ1PcIHpsKLqdNePhzznlPSKKSKamJjRhHcf5qU1KbjZ7IDqPOnJbliBuTUYOtPO586z5fxPD2uYnDLbX4tQfCPHLz0oVxU9gc9Rt5Gp3ckySSTzOpqlxFiE0MQZj6emtLj5O9DLH7CbeKE6rA86WmXFUmda6uhjtfF2NgBXC6Tv9NKT5VH95A3ZR5Ef9NTpe13Cu6HMjshj4gxQ+QIM0/F4q5cjrbrvExmZnid4zHTainRno6mLGb77h7UEgqxLXI07RQbLruTyNZzF38jMsAlWKzm0JBiRG403mnobiURXHw1296ojEsdgB5L/M05MRcVgwYgqQwnaQZBg6HUbERRovIUuYO4q52tuqTGdlKrJ5ZjpOhqbh9kE5zqPhEamZWSPED5VJxbpfjMVa6m9cQoSrEBNSVMgyTp8o9Kdw4lIAEGCcwOykQB4E9qgStTYxgCBETbnOsclFaXodwo3XzPbZQozB2vE9rkMlYWzchSMpM90z8ooxwfiPVK2RSmY6ySSY2pk1vG8SQ2UNsCTJgabSeQmKwWNwF0WUxLRlvM5WTr2T2iRuNTU3F+JEo8n4oB15TmP+2hOZnBls1oMVB2BBkiBMjQfUa1UKrmC44RCu5ZLalVUnQFjLR9KocUxqtqKz+NxBztsO02iiBvyHIVXbEGscsd5betwc0w4pgIXsUCINOwOKnsn5fxQa5crrd0gg91VI5eWytIp1FW7NsGe+ee2wodhbkwRzqynOs+X8WOPtIzH/ANVU4kgNoyNZEGasmpMPZRmi62VYY6bsQpIUabkx9aw4/wAovL0zAtjvpKNcRs2EVQqNnH+Ic0ieUCJAP0rq7XMBFFY7mfElvrFc2BOnOdoifTWrJwP5T6j96t2uCYsKLoQqoIi4SFExmEEwdtZogXOKdBsTh8rXEAUoHzTmAkgZSV+FpI3oZdw1zUxmHeIYeo2q7xHiOKvALfxBuKpkBmza7EyOdVLdkDtdZHlM+4ooVrVsFhmMLIk7wOZA5nfStR0jucOdENjPnVMkKGQSNnudZIPjlg60/h68PbDXGxOJf7wA3VobfZkCUBcISSSOTac6Erh7ZtdbkYLmiQc3OJiQYmj0NbDAK2NrCoxVw41AUprK5VgR3rAoMBY/pQse6QvqTM1cuY1ZEFV27OYjUc+wZPjU3tpOhT7voQGCnkas4Ph9xhCqz/5o0+Z2rM/ewIIJYj8qR9XIqTFcYuXWzOLjkAAZ73IbDQHTwpyFcoOcawT2jlYWi4M5GuKd1MFlQkxqDFU7mMw9oAXwEdhnS5ZzSeRDL8OSZgxsPChoxDEr+Hb1YLrcYxIJk9kd3dzpnHODOw6zNblQAEUmYJ3lu6avVR5TbP4hhmMaiTB8JMVATTn0MHlUTNWbstmnMaQGmFq4GmxuQ1wm4YA135R560SU5dTrJ5fKh3Atj5j2ootktI2ImDOhBiT4QKz5O4mezMSpMRyM/Sql/Gsi5hEgxrroRBq+jD4Z1FS2sAt2Q0gATpWXD+UlVn63AngSddeZrhOUDM0GN2UQe8RPpXVUJHIE11d2fHlb6YY5yRMvFLn9WV/1qCfWJrT4Wy9/CAm8QIMWRdbL2GgKFYkCAAY5SKAcJsHE3Vs27Ks7TAkpsCSZzFRoDuKdw3hovsRbLoVEk5lbSQOWU8/GsquIbV62dQ8eDrp6j+KPcNXANYvC9aJxBH4DWXhFhdMyO4JJMzoYAEUAHCu2bXW2w6gki4er2MRmbsz4TUuBt3cPcS+qI+QkrMPbJgjUKdefpVRKLHYQadhrZ72kz6gV1v7y9tLKdtFclQirnljJBIGdhJmCSJOlJi+JXXuvcEIWOYrblUB8FnQfzRXg2OtZc924Fvq2a22SIKgFWzDcyO/kKKJ2GcSN+2jYe9byFXzkMmVw2XLBnWIO23OhJxjDRYHl/wCa0D8UfFuVuZmuXFygl51AldxPKN6y7iiXs/pIcW/5z/flTDfb8zeppmQ8gfSpFwjn+k/OB70yMznvPrXFqYQRoaWgnE0k11dTMoNOFMFPUVNOCXCL5W4o/pb31g/331oRdKyQYmZg0Dt4YNbnmCseomiOJQxoYMgeu48qy5JuKxuqIXLyuvbthTyK7R5iiHCsHmRgtyZ2BH9MGaDG0QcwO+45VfwOPuWhmttkaCCUMEgiDv51lh+XS8vXbsfgRbUFg0ESCCFEehrqjxfFb1231d52Nm2EBgZ2VAwAyyfExSV1xjU3AMKgs4l2S07IBbi4EIEzLoSQysI0YKY8JrM9aojsn/Xry7gKscK6Q9RiGvLaVg3WKQTDZLkzlbZWjnBG9CevnltPOppNHjuNMLQw6MrWc/WCQQ2c7sWBzTEDU8u6uscdDJat3AGRM2dGDLtmNvLcWW1nx25VnvvJICwNPCT671GlxgZEgiaej3RpOLSyrczGyC2VAM2WQ0ZMwiRPz1oggXD3Wt4lZYWgSr2lBW6wUqFyFeTDXtDfSgn/AMvdy5Ui3Nvq7mWSbgmczZyYaea5dhVbE4xmaSAJ5DYeAk6U+hsbtdbdEW1dDbtl7pDBMygg5kUlZaDoBvQXiloaOpMNvmAVs43JUExO+550uIxN26Zu3HYhYBYljC/CvgKZxbGNdYu4RSxBItoLaiBGiroPl40tHtQzeddp402nRNNJDXCnRTKAWkrqSgFQa1YVYqFDtU80q249C3DLgKkHkPeiV0yNPzD2NZ7B3crD0Pzo6G0MHn7TWXJ6H2sO3hUKYxVIVzAIO4J1nbTlvUj3YoVxB5uWvOseH8lcnprujfVXLONS5cCK9u1LqvWZYuSGVRGbUbV1ZXFqxZAsiT2iNNARoSPn6UtdcYG47gL21Vyy5X+EgzOsH6+9V8NwsFS5uoIMQQZJ10GnhV3oy+GYi3fuMhB7LZiEOo0JiFjXfSqHGsQRibsSArlQp10XQHlvv86j/K9ba7wnev8AtfwXAHuPkUiYmYhe4dowAZ96oHBHrDbntBmXTWSpIMCjHRvFrkd7x63qwmW0uUXMpJDFe8L2fkaK3+I4dkd0tXFVWEhik/CdoGg86VyylExwsZ7iPCOoOW5dExMZGkd3PnNTYfo01y11wuCARoVjfaJafpR3h/G8MzoluzcDEntMUicp5DWks8dw9sMHw914JDMoXKJ/MeX/AIrO5ZtpOGd2df3QXDcKWQr3QksRJt5o0nWG28aA8TQB8qtmA5xl+UVruOOHS1cUQrAtDaaSRBy1jsS2Z2Pj/e9ace77ZcvjJqREgHMT8/pSFe4RW76L9DMPiBZW5evLcu2zchVUqo7RWSddVEz3mK11v7H8OQT94vabwE/iuucV9uDL5GEuni2Su6uvc8J9jeFYx198/O3/ANtWH+x3BroXv/6l/wC2n/H3pP8Aycdb708ENuoyK2P2icBtYPF9RZzFRaRjnIJzMWnUAaQBWPas8sdN8MvKbctTNUIqZ6zrfD1XK1abhP4i7SQAT6x+1ZYGjvR7EFBcYEAqEInchnCGB4ZprLk/FePsVuYNo2gDmTpQbiEdbbiNAZgzrrV7EY53GU7HTn30FxjFbgjkY9dKz4pdjks10JWmOmo5d9dQx+IspgAGPA11dMjFRRSSABJO1K9wkySSTzJ/emoxBBGhBEeB5UrrBg0wL9FuFNfvQCAtsF2J202U68zp860L8UtJd+6Nh7ZDOqM6MwIzE7q+5Bcan8u9Zjg2KuW8/VswzAK2UxI1MHSovu2ZiWYySSTEmSZM61nlJb20xtkmm74Z0We3ctXDBViSMqGRo2jamoOLXvutzq1uXSpGdlOUKHZ2zAAHkJUE99Yy9cZWgO5gATqpIygAZQTttV/B4BrgzO1wEN/UpM7HdiKi433a1wylupi2vE7tjDGzdtYW5ctOhZV6tzlKwGD9ZvB515oXksxjUk6ba66eFazFNheqYA3ZVWKqXukBoMaSRufrWUsWy3ZG7GB5nQVrw46Z8+T6J4DgWtYDDZLea4MPZUwQrfCCRmI2k7VaZMRKwjwWUMetSVUtDPGXWBrHnRyymW2EA+FAByOgEe1RFX8f+X12r0cfT5vPLV3ralwnFXpDNZcAydXH58sZSAR2e1WkwWKNzs3EKkDRiQQTJ0056D1oX2/Hn+X5f34VasTAnf5ftUZ4S9tOL5FnWunz39rt2eK4oT8BtoPIWbc/Un1rCNWl6d4rrMfi378RdHyVig+i1mTXPm9bjnUKOVSXDrUQp771lW+PquFWMLcg+YI1/vvAqrU1ncCpsOUYzCZmhmNuS2bx5UUWwOYE0FxI7R86WGMlLK7R3G1511WcHgw4JJOhG3kT+1dWiVVhsZ3n6U+2gIaSQQNBG/maI3eLq21hT+qD9AAKiPEF1/BtgHeM3Lu7QH0pdmn4Gls6XXuIu/YgEnnvp3UXPD+Fk9q9ifHtWJ9qEcEuIXIcdjKSAGIEyOc+NRcdKdZ+GIXKOZOsmd/lUa3kvf8Ai0fFbOFv30bDOFCrbGQW1BPVqBmORyJMamNzNXLNtrRNuS0wOWghu0PmV/8ANY7g3EWsXQ67xB3Ghg7jyFatelit8VknyCn9hSyxvpWGcntBxljFzbKLTCCmuY7ENHlrPKg3RexnxWGT81+16dYpP0mjXGOM2rli4BhyrFYDsiyNR/VM1U+z9Jx9g/kL3D/wWnb3ArfhnbDnu509BxPFrjuwa9dC53KZZMAsTEgjTuFEuj3GHN5ULO4dlEuWEZTLEKZ5CoeG8GW5bU9aAWAnUSJMbd9GOD9FhZcOLmYLmgED+pSu88pmvayz4/Gyf7XV8r5XxsccuPL9fr7/AL/tPbxTazeYaTGZ6sYDiJzf4hcEgfE2mu+tOThYthna5uVABIAEkAe8UEtYhgbzMeyi3WGoMZFZtPQV4N8sLjv7rjl4uXHLx+p+nhPFb+e5cf8APcdv9Tk/vQ81M+wqE1pl7OeiinGmCnGoq46no0VEaeppCVpBtWexD9pvM0ensDyHtWevjtN5n3oxFOs4lknKxE7xXVDFdVJPzeAri1SZFyTm7WaI/wAvfUYoMU6PP+LqJ7B9xTuOpmuyqx2QIEDmeVJwG3Nw6R2T7im8fT8QfpHuan7PfStYsMHUldmHd31pELcrZ9KzOCX8RP1L71srdo/3NLIQK4o56pgwiYAk85naif2XYUPi7kyAuGuyRuM5RNJ59s1T4tg/wmYjbUeZMUe+yW3H3q53JZUHzd2P+wVUz8MblPrdY/IyuONraP0bskki84kAENbBHZ20DUY4F0e6vMVuKwZGUdgruRJOp8aqW7zSAGBkTJQRp6Ue4I5IMkHQbbc9hS+P87k5Mv48rLLv6048vnc/jZ5df1P/AAI4t0Ue7l/EICOr5Q5ytl2VgRtsfkKHdJuFNYwWKuEmBh7qCWmOsXII9RW8rIfa3fy8LvD8zWV//VCfoprqvBh1f0nj+Zy2+P79vna/UFS3jrUVY5e3oz04U400U41FVDTTkppp6UCDobsDyHtQK4dT5n3o3c5DuFA7h1PmfeiCm11dNdVA6fD+9f5pZpQBU+Dw5d1QQCxABOwnmaQX+jbgXCWMDIRrtMindIe1cBAJGUCY8TWt4N0LwwIa/iix/KqZF+bNJP0ra8L4Rgrf+Etue8nM3qxJFRub2enjvB+C4m46Nbw9xgGBnKVWAfzNArY3cLfUa4Z/l2v9s16Wq01gBJMQN5qcrtWPTx3pFccWIa2UzkbhgdCTBlQJ7O1aP7MbRGEutHx4iPMJbH7uaq/ajxezct2rVq4rkXCzZdQIUqNRp/VRb7P+MW8NgrCXEY9a1x5GSBN3qxoxBPfpOgJrXHi/kwuM6cfzLfHpo8DxFSlsXLTK7AAgSILM2kE9y1pOA/4e0axHgNvegGC6U4G6AYIGgBNpoGYwO0oIEmOdaexlXQCBNa4/G1yTLrqfTy+bL946XRXnf24YiMDbX8+ISfJbdw++WvQFcd9eVfbziexhbc7tdf0CKP8Aca6Muofxu+SPHLh1plOc0yuOvbhRTqaKdU1UJUtldR4kVGBVnBLLr5z6UgKXhqfKgTDU+f70cvnegLHWniVEcJeUKATEd4Pef5rqHZq6mF61w9zyj6mjHB+E5bttjOjA6nx7qvrpyqxg27a+Y96nZ6aAV0Ugp1BHW7hGxI8iRWY6XY5zcVWd2UqOyXYqNW1ykxNaWsl0qWbynuQe7U4QDjEJIgTvT8HxrEWgBbv3UA2UO2X/AEzH0pmJNDyauWz0nKS+2jw/SvEAgsLNwggg3LFsmQZHaVQd/GtNhPtXxC/4lm0/6Sye+avNwa7NWs5bGOXBhl7j2LC/a7Z/+zD3V/QUcfUrWQ+03pRZx1yy1gtlS2wOZcpDM0x6AVjC9MzUs+W5TRcfxcMMvKEakrjXRWLpOWlpEp8UqvH0QVf4WksT3D3/APRqkKL8MtQk82M/LlSJ2J50CNHcTp6UCpwq5a6lFdVBtalwvxr+oe9RxU+G+JfMe9QB5TTppgNOmmDprJ9KT+N/wL7tWqmsp0lP44/SvuacKs5ef61UNWbmtQMtMjK6lpKNghpKcabSMlKK6uFMzlp1NAp4qacqbC4Yue4czRsCAANhpVfBjs/33VZIqQqYrnQPLRvFHegwNViRAK6ng11UG0BqawO0PMe9RqKktntL5j3qAMg06aTLSUwfNZXpJ/jj9K+5rTzWX6R/4w/SvuacKs21MNOam0AhFNK06uoCMikinmkoM2KWK6KWgOFSWhTBUtga+vtQBbCDs/P9qsxpUOFHZFWrFpnIVRJJrM4p3bBY5VGp0FUMVwV0MSrEbwefcK2gtJZUqINwiGbu/wAq/wA1QKCjGixjnwzjdT711ap45ia6r8i0uRS22APfTC1cKUAqnER/UCPLUfTWrFu+rbMDQYGkMHcVWyHSKyHSnTEJ+ke5oql1x8LnyOo+tDeLWnuNnMaLGnhJ50Bm3ptPcU00A011ca6gyGm0+m0AlLXClNAIKnw41+R9qhFW+H25dQdiaAM8PsM5CqJNaJQlhSqkFz8TDl/lX+aF2UyRBIjbLp6xqfnSm731nZtUddeTUbGlZqhc0y2QiupBSUBey04CrItUvU0BXAp2SpTZPKpLViN6ZIOrNQX9QQO41euNyqvct0rQxV0QSDoRvURrV4/hi3NxDfmXf599Z/F4B0MfF3Rv8xVShTrqVlI3BHmKSaYdSUtdQCClIpUUkwBJ7hRvCcCkBrhP6Rp9aACIpJgAk9w3o5wvAFe2+/Id3n40Tw+DRNFUD3+ZqbLU7GkcnuP0qNge6pmNMNI0BRu8elNazPM1OK6KCV0w48fWuqxXUzFgKWaYDSzSJKtc9RZqZnpArUzLzOlK9yBrVckv4L70GbcuSYX1pbVkLPeedTBQBpTCaDRX8Orch6VQucLTmgNEoqRFoIDPCrX5T8mP81InCrP5J8yT+9GLtkc6hW2OVPY0isYdV+FQPIVNNKRTM1AKWimZq4mkAoBQ1cTTaQmmTiKSe+kY0gpgpNdSgV1ICCmnTTRXLvUqcxrmuBd9TyA3pLxhWI5Co8KoieZ50EVbRYy58hyFTRXGnUGZFKbYpTSqaAYtmpFSKetLcNAVbmtNVae29MmmDHNQsafdqGaZEemTUhpq0E41xFPFcRQFleFXSAQshhmEMu0T36acqbb4ZdMdkdosB2l3XPI30P4belVmrgeXLu5UwuXuH3UBZkgDcyD3dx/zL611VAa6kb//2Q==',
    url:
      'https://m.blog.naver.com/PostView.nhn?blogId=berryhill626&logNo=220881590303&proxyReferer=https%3A%2F%2Fwww.google.com%2F'
  },
  {
    title: '펜타클 사이트',
    desc: '메인페이지 video control js 작업',
    img: 'https://pentacle-kr.s3.amazonaws.com/images/common/logo.png',
    url: 'https://www.pentacle.co.kr/'
  },
  {
    title: 'The all-new BMW 7 Series',
    desc: 'The all-new BMW 7 Series 사이트 작업',
    img:
      'https://pentacle-kr.s3.amazonaws.com/images/portfolio/f1021cba-babf-4441-b420-b14d716deb5d.jpg',
    url: 'https://www.bmw7series.co.kr/'
  },
  {
    title: '킷캣 넌나의 OO 이벤트 사이트',
    desc: '킷캣 이벤트 사이트 작업',
    img:
      'https://pentacle-kr.s3.amazonaws.com/images/portfolio/202-e7ba6c1f-5b01-4ad5-aa78-ccaf0a82f6f7.jpg',
    url: 'https://www.pentacle.co.kr/portfolio/202'
  },
  {
    title: '쌤소나이트 레드 Carry On 양세종 디지털 사인회',
    desc: '1대 1 대화방식의 맞춤형 스토리텔링 영상 기반 이벤트 사이트 제작',
    img:
      'https://pentacle-kr.s3.amazonaws.com/images/portfolio/0-ddf20b50-6a07-4af0-ad1b-a4f139f528f9.jpg',
    url: 'https://www.pentacle.co.kr/portfolio/219'
  },
  {
    title: '누텔라 아침을 부탁해 캠페인 사이트',
    desc:
      '누텔라 제품, 빵, 디저트를 사용자가 직접 조합하여 만든 이미지를 공유하는 이벤트 사이트 작업',
    img:
      'https://pentacle-kr.s3.amazonaws.com/images/portfolio/269-a227c573-0f75-4f2b-a2ec-20107fb22a5a.jpg',
    url: 'https://www.pentacle.co.kr/portfolio/269'
  },
  {
    title: '2018 세타필 레스토라덤(AD) 동안바디 캠페인 사이트',
    desc:
      'desktop 반응형사이트, 메뉴마다 화면전환 효과, 여러가지 이벤트 응모가 모아져 있는 사이트로 작업',
    img:
      'https://pentacle-kr.s3.amazonaws.com/images/portfolio/0-75620d12-04ad-4dfd-99c7-32a098f60818.jpg',
    url: 'https://www.pentacle.co.kr/portfolio/257'
  },
  {
    title: 'U+5G 일상을 바꿉니다',
    desc: '랜딩페이지 사이트 작업',
    skills: 'scss, vue, javascript',
    img:
      'https://pentacle-kr.s3.amazonaws.com/images/portfolio/0-f1cf7ee9-d962-4445-9ef4-e1673f4c435a.jpg',
    url: 'https://www.pentacle.co.kr/portfolio/264'
  },
  {
    title: '아테온 버츄얼 드라이빙',
    desc: '차에 대한 옵션과 기능들을 다이나믹한 네비게이션으로 제작',
    img:
      'https://pentacle-kr.s3.amazonaws.com/images/portfolio/0-568e27c3-0af4-4793-a0d2-a01ad029b4e0.jpg',
    url: 'https://arteon.vwkr.co.kr/arteondriving'
  },
  {
    title: '아테온 특별 프로모션',
    desc: '특별프로모션 이벤트 사이트 제작',
    img: 'https://vwkr-arteon.s3.amazonaws.com/static/financial/share.jpg',
    url: 'https://arteon.vwkr.co.kr/promotion2019'
  }
];

export { tech, education, experience, portfolio };
