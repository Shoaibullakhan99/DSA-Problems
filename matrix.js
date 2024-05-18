const matrix = [[1,1,1], [1, 0, 1], [1, 1, 1]];

function setMatrixZero(mat){
    var row = mat.length;
    var col = mat[0].length;
    console.log(row);
    console.log(col);
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(mat[i][j] == 0){
                markRow(mat, row, col, i);
                markCOl(mat, row, col, j);
            }
        }
    }
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(mat[i][j] === -1){
                mat[i][j] = 0;
            }
        }
    }
    console.log(mat)
}

function markRow(mat, n, m, i){
    for(let j = 0; j < m; j++){
        if(mat[i][j] !== 0){
            mat[i][j] = -1;
        }
    }
}

function markCOl(mat, n, m ,j){
    for(let i = 0; i < n; i++){
        if(mat[i][j] != 0){
            mat[i][j] = -1;
        }
    }
}

// setMatrixZero(matrix);
// O(n*m)*(n+m) + O(n*m);

function zeroMatrix(mat){
    console.log('mat', mat)
    const n = mat.length;
    const m = mat[0].length;

    const row = new Array(n).fill(0);
    const col = new Array(m).fill(0);

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(mat[i][j] == 0){
                console.log(i,j)
                row[i] = 1;
                col[j] = 1; 
            }
        }
    }
    console.log(row);
    console.log(col);

    for(let i = 0; i < n; i ++){
         for(let j = 0; j < m; j++){
        if(row[i] || col[j] ){
            mat[i][j] = 0
            }
        }
    }
console.log(mat)
}

// zeroMatrix(matrix)

function zermoMatrixOptimal(mat){
    const n = mat.length;
    const m = mat[0].length;

    let col0 = 1;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(mat[i][j] == 0){
                mat[i][0] = 0;

                if( j != 0 ){
                    mat[0][j] = 0;
                } else {
                    col0 = 0;
                }
            }
        }
    }

        for(let i = 1; i < n ; i++){
            for(let j = 1; j < m; j++){
                if(mat[i][j] !== 0){
                    if(mat[0][j] == 0 || mat[i][0] == 0){
                        mat[i][j] = 0;
                    }
                }
            }
        }

        if(mat[0][0] == 0){
            for(let j = 0; j < m; j++){
                mat[0][j] = 0;
            }
        }
        if(col0 == 0){
            for(let i = 0; i < n; i++){
                mat[i][0] = 0
            }
        }
        console.log(mat)
}

zermoMatrixOptimal(matrix)