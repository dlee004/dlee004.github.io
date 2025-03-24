// Global constants
const canvas = document.getElementById('glCanvas'); // Get the canvas element 
const gl = canvas.getContext('webgl2'); // Get the WebGL2 context

if (!gl) {
    console.error('WebGL 2 is not supported by your browser.');
}

// Set canvas size: 현재 window 전체를 canvas로 사용
canvas.width = 500;
canvas.height = 500;

// Initialize WebGL settings: viewport and clear color
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0.1, 0.2, 0.3, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);   


// Start rendering
render();

// Render loop
function render() {
    const viewportSize = canvas.width/2;


    gl.enable(gl.SCISSOR_TEST); 

    gl.scissor(0, canvas.height/2, viewportSize, viewportSize);
    gl.viewport(0, canvas.height/2, viewportSize, viewportSize);
    gl.clearColor(1.0, 0.0, 0.0, 1.0); 
    gl.clear(gl.COLOR_BUFFER_BIT);   

    gl.scissor(canvas.width/2,canvas.height/2, viewportSize, viewportSize);
    gl.viewport(canvas.width/2,canvas.height/2, viewportSize, viewportSize);
    gl.clearColor(0.0, 1.0, 0.0, 1.0); 
    gl.clear(gl.COLOR_BUFFER_BIT);   

    gl.scissor(0, 0, viewportSize, viewportSize);
    gl.viewport(0, 0, viewportSize, viewportSize);
    gl.clearColor(0.0, 0.0, 1.0, 1.0); 
    gl.clear(gl.COLOR_BUFFER_BIT);   

    gl.scissor(canvas.width/2, 0, viewportSize, viewportSize);
    gl.viewport(canvas.width/2, 0, viewportSize, viewportSize);
    gl.clearColor(1.0, 1.0, 0.0, 1.0); 
    gl.clear(gl.COLOR_BUFFER_BIT);   
}

// Resize viewport when window size changes
window.addEventListener('resize', () => {
    
    var newSize;
    if (window.innerWidth > window.innerHeight)
    {
        if (window.innerHeight > 500)
        {
            newSize = 500;
        }
        else
        {
            newSize = window.innerHeight;
        }
    }
    else
    {
        if (window.innerWidth > 500)
        {
            newSize = 500;
        }
        else
        {
            newSize = window.innerWidth;
        }
    }
    
    canvas.width = newSize;
    canvas.height = newSize;
    gl.viewport(0, 0, canvas.width, canvas.height);
    render();
});