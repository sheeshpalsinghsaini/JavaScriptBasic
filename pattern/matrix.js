// let str="";

// for(let i=0;i<10;i++){
//     for(let j=0;j<10;j++){
//         str+=" * ";
//     }
//     str+="\n";
// }

// console.log(str);


// for(let i=0;i<5;i++){
//     for(let j=0;j<=i;j++){
//         str+=" * ";
//     }
//     str+="\n";
// }at.forEach((x)=>{
//     console.log(x);
// })

// console.log(str);






// for(let i=10;i>0;i--){
//     for(let j=0;j<i;j++){
//         str+=" * ";
//     }
//     str+="\n";
// }

// console.log(str);



// for(let i=0;i<10;i++){
//     for(let j=10;j>i;j--){
//         str+="   ";
//     }
//     for(let k=0;k<=i;k++){
//         str+=" * ";
//     }

//     str+="\n";

// }







// console.log(str);

// let arr = [1,2,3,4,5,5,6,6];

// let str="";
// arr.forEach(x=>str+=x+" ");

// console.log(str);




//anticlock wise traversal matrix.
// let mat = [[1,2,3,4,5,6],[2,3,4,3,4,5],[3,4,5,1,2,4,5]];

// console.log(mat);

// mat.forEach((x)=>{
//     console.log(x);
// })
// mat.forEach((x)=>{
    //     x.forEach((e)=>{
        //         str+=e+" ";
        //     })
        //     str+="\n";
        // })
        
        // console.log(str);
        // console.log(mat.length);
        // console.log(mat[0]);
        // console.log(mat[0].length);


        // let str ="";

        // let mat = [[1,2,3,4,5],
        //             [6,7,8,9,10],
        //             [11,12,13,14,15],
        //             [16,17,18,19,20]];

        // let top=0,left=0,bottom=mat.length-1,right=mat[0].length-1;
        // // console.log(top)
        // // console.log(left)
        // // console.log(bottom)
        // // console.log(right)

        // while(top<=bottom && left<=right){
        //     for(let i=top;i<=bottom;i++){
        //         str+=mat[i][left]+" ";
        //     }
        //     left++;

        //     for(let i=left;i<=right;i++){
        //         str+=mat[bottom][i]+" ";
        //     }
        //     bottom--;

        //     if(top<=bottom){
        //         for(let i=bottom;i>=top;i--){
        //             str+=mat[i][right]+" ";
        //         }
        //         right--;
        //     }

        //     if(left<=right){
        //         for(let i=right;i>=left;i--){
        //             str+=mat[top][i]+" ";
        //         }
        //         top++;
        //     }
        // }

        // console.log(str);







        // --------------Pattern---------------------------------------
        /*

        1
        1 2 1
        1 2 3 2 1
        1 2 3 4 3 2 1
        1 2 3 4 5 4 3 2 1
        1 2 3 4 3 2 1
        1 2 3 2 1
        1 2 1
        1

        */

        let str = "";
        let n = 5;
        for(let i=0;i<2*n;i++){
            let col=i>n?2*n-i:i;
            let j=0;
            for( j=0;j<col;j++){
                str+=(j+1)+" ";
            }
            for(let k=j-1;k>0;k--){
                str+=k+" ";
            }
            str+="\n";
        }

        console.log(str);