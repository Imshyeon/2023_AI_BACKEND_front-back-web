// 캡슐화 : 은닉된 멤버변수에게 오픈된 메소드가 [값 전달 및 변경] 및 [리턴]하는 구조
//          setter&getter 구조
//          write   read

// 접근제한자, static
class Person{
    //속성 = field, attribute
    //public field
    my_name;

    //private field #
    #age;   //this.#age는 #age를 호출.

    static tel="7777";  //클래스.멤버   Person.tel; : static이니까
                        //객체변수.tel; (x) : non-static이 객체변수(클래스변수).멤버

    constructor(my_name, age){
        this.my_name = my_name;
        this.#age = age;
    }

    //setter
    set age(v){
        this.#age=v;
    }

    //getter
    get age(){
        return this.#age;
    }

}
p1 = new Person("홍길동", 10);  
console.log(p1.my_name+ "\t" +p1.age);    //홍길동	undefined       (getter 만들기 전)
                                          //       숨겨져 있어서 undefined
//홍길동의 나이를 20으로 변경 후 출력해보자.
p1.age=20;  // 값 전달 및 변경 setter
console.log(p1.my_name+ "\t" +p1.age);  //getter