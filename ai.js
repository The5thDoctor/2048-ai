(() => {
        var container = document.querySelector(".tile-container");
        var tiles = container.querySelectorAll(".tile");
        var gridSize = 4;
        var grid = initGrid();

        function initGrid()
        {
                let grid = [];
                for (let i = 0; i < gridSize; ++i)
                        grid.push(new Array(gridSize).fill(0));
                return grid;
        }

        function update()
        {
                grid = initGrid();
                tiles.forEach(e => {
                        let [ _, x, y ] = e.className.match(/tile-position-(\d+)-(\d+)/).map(e => parseInt(e));
                        grid[x][y] = Math.log2(parseInt(e.innerText));
                });
        }

        // TODO: Implement better scoring function
        function score(pos)
        {
                return pos.reduce((a, i) => a + i.reduce((b, j) => b + j));
        }

        function move(pos)
        {
        }

        function deepCopy(obj)
        {
                return JSON.parse(JSON.stringify(obj));
        }

        var areAdjacent = false;
        console.log(grid);

        var thing = function(val1) {
                for (let i = 0; i < grid.length; i++) {
                        for (let j = 0; j < grid[i].length; j++) {
                                if (grid[i][j] != 0 && grid[i][j] === val1 && grid[i][j + 1] === val1) {
                                        areAdjacent = true;
                                        break;
                                }
                        }
                }
        }
        update();
        thing(2);
        console.log(areAdjacent);
})();
