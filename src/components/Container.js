import React,{useEffect, useState} from 'react'
import Bar from './Bar';
import Header from "./Header"
import { toast} from "react-toastify";
const Stopwatch = require('statman-stopwatch');

const Container = () => {

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000);
        var sec=(seconds%10).toFixed(0);
        seconds = seconds.toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds+":"+sec +"s";
      }

   const [loading,setLoading]=useState(false);

    const getRandomArray = (len) => {
        let temp=[];
        for(let i=0;i<len;i++)
        temp.push(Math.floor(Math.random()*50)+1);
        return temp;
    }

    const genRandomArray = () => {
        let tmp=getRandomArray(20);
        setSize(20);
        setArray(tmp);
        let text = tmp.toString();
        setCustom(text);
    }
    
    const [size,setSize] = useState(20);
    const [arr,setArray] = useState(getRandomArray(size));
    const [lap,setLap] = useState(400);
    const [custom,setCustom] = useState(arr.toString());
   
    const notify=(sort,a,b,time)=>toast(({ closeToast }) =>
    <div> 
        <div style={{fontWeight: '800'}}>Hurray {sort} Sort Completed!!! 😃</div>
        <div style={{fontWeight: '800'}} >Comparsions {a}</div>
        <div style={{fontWeight: '800'}} >Swaps {b}</div>
        <div style={{fontWeight: '800'}} >Time {time}</div>
    </div>);

    const setTime = (time) => {
       setLap(time);
    }

    const bubbleSort =() => {
        setLoading(true);
        let comp=0,swaps=0;
        const sw = new Stopwatch(true);
        let tmp=arr.slice();
        let time=0;
        for(let i=0;i<tmp.length;i++)
        {
            for(let j=0;j<tmp.length-i-1;j++)
            {
                comp++;
                let check = 0;
                if(tmp[j+1]<tmp[j])
                {
                    let temp=tmp[j];
                    tmp[j]=tmp[j+1];
                    tmp[j+1]=temp;
                    check=1;
                }
                let newArray=tmp.slice();
                let x=j,y=i;
                setTimeout(() => {
                    if(x)
                    document.getElementById(`bar${x-1}`).style.backgroundColor = "#FFBCBC";
                    document.getElementById(`bar${x}`).style.backgroundColor = "#548CA8";
                    document.getElementById(`bar${x+1}`).style.backgroundColor = "#548CA8";
                    if(x===tmp.length-y-2 && check==0){
                        document.getElementById(`bar${x}`).style.backgroundColor = "#FFBCBC";
                        document.getElementById(`bar${x+1}`).style.backgroundColor = "#78DEC7";
                    }   
                }, time+=lap);
                if(check){
                    swaps++;
                    setTimeout(() => {
                        setArray(newArray); 
                        document.getElementById(`bar${x}`).style.backgroundColor = "#E93B81";
                        document.getElementById(`bar${x+1}`).style.backgroundColor = "#E93B81";
                        if(x===tmp.length-y-2){
                            document.getElementById(`bar${x}`).style.backgroundColor = "#FFBCBC";
                            document.getElementById(`bar${x+1}`).style.backgroundColor = "#78DEC7";
                        } 
                    }, time+=lap);
                }
            }
        }
        setTimeout(() => {
            for(var i=0;i<size;i++)
               document.getElementById(`bar${i}`).style.backgroundColor = "#FFBCBC";
               setLoading(false);
               sw.stop();
               const delta = sw.read();
               notify('Bubble',comp,swaps,millisToMinutesAndSeconds(Math.ceil(delta)) ); 
        }, time+lap);
       
    }


    const insertionSort = () => {  
        let comp=0,swaps=0;
        setLoading(true); 
        const sw = new Stopwatch(true);
        let tmp=arr.slice();
        let time=0;

        for(var i=1;i<size;i++)
         {
             for(var j=i;j>0;j--)
             {   
                comp++; 
                if(tmp[j]<tmp[j-1])
                   {  
                        let temp=tmp[j];
                        tmp[j]=tmp[j-1];
                        tmp[j-1]=temp;
                        swaps++;
                   }
                else
                   break;
                let newArray=tmp.slice();
                let x=j,y=i;
                setTimeout(() => {
                    for(var k=0;k<=y;k++)
                         document.getElementById(`bar${k}`).style.backgroundColor = "#78DEC7";     
                    document.getElementById(`bar${x-1}`).style.backgroundColor =  "#548CA8";
                    document.getElementById(`bar${x}`).style.backgroundColor = "#548CA8";   
                }, time+=lap);

                setTimeout(() => {
                    setArray(newArray); 
                    document.getElementById(`bar${x}`).style.backgroundColor = "#E93B81";
                    document.getElementById(`bar${x-1}`).style.backgroundColor = "#E93B81";
                }, time+=lap);

             }
         }
         setTimeout(() => {
            for(var i=0;i<size;i++)
               document.getElementById(`bar${i}`).style.backgroundColor = "#FFBCBC";
               sw.stop();
               const delta = sw.read();
               notify('Insertion',comp,swaps,millisToMinutesAndSeconds(Math.ceil(delta)) ); 
            setLoading(false);    
        }, time+lap);
    }
    
   
    const selectionSort = () => {  
        const sw = new Stopwatch(true);
        setLoading(true);
        let tmp=arr.slice();
        let time=0;
        let comp=0,swaps=0;

        for(var i=0;i<size;i++)
         {   let value=tmp[i];
             let key=i;
             let w=i;
             for(var j=i+1;j<size;j++)
             {    
                comp++;
                if(value>tmp[j])
                   {  
                        key=j;
                        value=tmp[j];
                   }
            
                let x=j,y=key;
                setTimeout(() => {
                    for(var k=w;k<size;k++)
                    document.getElementById(`bar${k}`).style.backgroundColor = "#FFBCBC";
                    document.getElementById(`bar${y}`).style.backgroundColor =  "#548CA8";
                    document.getElementById(`bar${x}`).style.backgroundColor = "#2F5D62";
                    document.getElementById(`bar${w}`).style.backgroundColor =  "#E93B81";
                }, time+=lap);

            }   
             
             if(key!=i){
             let temp=tmp[i];
             tmp[i]=value;
             tmp[key]=temp;
             swaps++;}
            let newArray=tmp.slice();
            setTimeout(() => {
                document.getElementById(`bar${w}`).style.backgroundColor =  "#78DEC7";
                setArray(newArray);    
            }, time+=lap);
         }
           
         setTimeout(() => {
            for(var i=0;i<size;i++)
               document.getElementById(`bar${i}`).style.backgroundColor = "#FFBCBC";
               sw.stop();
               const delta = sw.read();
               notify('Selection',comp,swaps,millisToMinutesAndSeconds(Math.ceil(delta)) ); 
            setLoading(false);   
        }, time+lap);
    }


    const mergeSort = () => {  
        const sw = new Stopwatch(true);
        setLoading(true);
        let tmp=arr.slice();
        let time=0;
        let comp=0,swaps=0;
    
        const merging=(s,e)=>{
               let m=Math.floor((s+e)/2);
               let j=m+1;
               let i=s;
               let k=i;
               let array=arr.slice();
               while(i<=m && j<=e){
                   comp++;
                  if(tmp[i]<=tmp[j]){
                   array[k++]=tmp[i++];
                  }
                  else {
                    array[k++]=tmp[j++];
                    swaps++;
                  }
               }
              
            while(i<=m)array[k++]=tmp[i++];
            while(j<=e)array[k++]=tmp[j++];
            for(let k=s;k<=e;k++){
                tmp[k]=array[k];
            }

            let newArray=tmp.slice();
            setTimeout(() => {
                for(var k=0;k<size;k++)
                document.getElementById(`bar${k}`).style.backgroundColor =  "#FFBCBC";

                for(var k=s;k<=m;k++)
                document.getElementById(`bar${k}`).style.backgroundColor =  "red";
                for(var k=m+1;k<=e;k++)
                document.getElementById(`bar${k}`).style.backgroundColor =  "#0C4271";
                setArray(newArray);    
            }, time+=lap);
            

        }
        
        const merge = (s,e) => {  
            if(s>=e)return;
          let m=Math.floor((s+e)/2);
           merge(s,m);
           merge(m+1,e);
           merging(s,e);
        }
        
        merge(0,tmp.length-1);
           
         setTimeout(() => {
            for(var i=0;i<size;i++)
               document.getElementById(`bar${i}`).style.backgroundColor = "#FFBCBC";
               sw.stop();
               const delta = sw.read();
               notify('Merge',comp,swaps,millisToMinutesAndSeconds(Math.ceil(delta)) ); 
            setLoading(false);   
        }, time+lap);
    }


    const quickSort = () => { 
        const sw = new Stopwatch(true);
        setLoading(true); 
        let tmp=arr.slice();
        let time=0;
        let comp=0,swaps=0;
        let  pivotPoints=new Set();
        const pivotPoint=(s,e)=>{
            
             let k=s-1;
             let j=s;

             setTimeout(() => {
                for(var i=0;i<size;i++)
                if(!pivotPoints.has(i))
                  document.getElementById(`bar${i}`).style.backgroundColor = "#FFBCBC";
                  document.getElementById(`bar${e}`).style.backgroundColor =  "red";
            }, time+=lap);

             while(j<e){
                 comp++;
                if(tmp[j]<tmp[e]){
                     k++;
                     let temp=tmp[j];
                     tmp[j]=tmp[k];
                     tmp[k]=temp;
                     swaps++;
                }
                 j++;
             }
              k=k+1;
              let temp=tmp[e];
              tmp[e]=tmp[k];
              tmp[k]=temp;
              swaps++;
            let newArray=tmp.slice();
            setTimeout(() => {
                pivotPoints.add(k);
                for (let pivot of pivotPoints)
                  document.getElementById(`bar${pivot}`).style.backgroundColor =  "#0C4271";
                setArray(newArray); 
                  
            }, time+=lap);
           
            return k;
        }
        
        const quick = (s,e) => {  
            if(s>=e)return;
            let m=pivotPoint(s,e);
            quick(s,m-1);
            quick(m+1,e);
        }
        
        quick(0,tmp.length-1);
           
         setTimeout(() => {
            for(var i=0;i<size;i++)
               document.getElementById(`bar${i}`).style.backgroundColor = "#FFBCBC";
            setLoading(false);   
            sw.stop();
            const delta = sw.read();
            notify('Quick',comp,swaps,millisToMinutesAndSeconds(Math.ceil(delta)) ); 
        }, time+lap);
    }
  

    return (
        <div>
            <Header genRandomArray={genRandomArray} bubbleSort={bubbleSort} setTime={setTime} insertionSort={insertionSort} selectionSort={selectionSort} mergeSort={mergeSort} quickSort={quickSort} loading={loading}/>
            <div  className="flex-container"   style={{height:'400px'}}>
                {arr.map((item,index) => <Bar height={item} index={index}/>)}
            </div>
        </div>
    )
}

export default Container;
