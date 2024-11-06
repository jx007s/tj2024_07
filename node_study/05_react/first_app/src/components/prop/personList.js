import React from 'react';
import Person from './person';
//취미, 특기, 통학방식, 사진
let persons = [
    {ban:1, pname:'이효리', gender:'m', hobby:'잠', spec:'노래', tran:'버스', img:'aaa.jpg'},
    {ban:2, pname:'삼효리', gender:'f', spec:'춤', img:'bbb.png'},
    {ban:1, pname:'사효리', gender:'m', hobby:'게임', tran:'도보', img:'ccc.jpg'},
    {ban:2, pname:'오효리', gender:'f', hobby:'축구', spec:'손레', img:'eee.jpg'},
    {ban:1, pname:'육효리', gender:'f', hobby:'농구', spec:'목레', tran:'경공술'}
]

function PersonList(props) {
    return (
        <div>
            <h2>person List 입니다.</h2>
            {persons.map((ee)=>(<Person ban={ee.ban}
             pname={ee.pname} gender={ee.gender} 
             hobby={ee.hobby} spec={ee.spec} tran={ee.tran} img={ee.img} />))}
        </div>
    );
}

export default PersonList;