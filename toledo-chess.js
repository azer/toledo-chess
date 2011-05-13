// Javascript chess engine (c)2011 Oscar Toledo G.
var toledoChess = (function(exports,undefined){

  var B, i, y, u, b, I, G, x, z, M, l;

  function X(w, c, h, e, S, s) {
    var t, o, L, E, d, O = e,
        N = -M * M,
        K = 78 - h << x,
        p, g, n, m, A, q, r, C, J, a = y ? -x : x,
        from, to;
    y ^= 8;
    G++;
    d = w || s && s >= h && X(0, 0, 0, 21, 0, 0) > M;
    do {
      if (o = I[p = O]) {
        q = o & z ^ y;
        if (q < 7) {
          A = q-- & 2 ? 8 : 4;
          C = o - 9 & z ? [53, 47, 61, 51, 47, 47][q] : 57;
          do {
            r = I[p += l[C]];
            if (!w | p == w) {
              g = q | p + a - S ? 0 : S;
              if (!r & ( !! q | A < 3 || !! g) || (r + 1 & z ^ y) > 9 && q | A > 2) {
                if (m = !(r - 2 & 7)) return y ^= 8, I[G--] = O, K;
                J = n = o & z;
                E = I[p - a] & z;
                t = q | E - 7 ? n : (n += 2, 6 ^ y);
                while (n <= t) {
                  L = r ? l[r & 7 | 32] - h - q : 0;
                  if (
                  s) L += (1 - q ? l[(p - p % x) / x + 37] - l[(O - O % x) / x + 37] + l[p % x + 38] * (q ? 1 : 2) - l[O % x + 38] + (o & 16) / 2 : !! m * 9) + (!q ? !(I[p - 1] ^ n) + !(I[p + 1] ^ n) + l[n & 7 | 32] - 99 + !! g * 99 + (A < 2) : 0) + !(E ^ y ^ 9);
                  if (s > h || 1 < s & s == h && L > z | d) {
                    I[p] = n, I[O] = m ? (I[g] = I[m], I[m] = 0) : g ? I[g] = 0 : 0;
                    L -= X(s > h | d ? 0 : p, L - N, h + 1, I[G + 1], J = q | A > 1 ? 0 : p, s);
                    if (!(h || s - 1 | B - O | i - n | p - b | L < -M)){ 
                      exports.makeMove.callback && ( exports.makeMove.callback(O,p), ( exports.makeMove.callback = undefined ) );
                      return W(), G--, u = J;
                    }
                    J = q - 1 | A < 7 || m || !s | d | r | o < z || X(0, 0, 0, 21, 0, 0) > M;
                    I[O] = o;
                    I[p] = r;
                    m ? (I[m] = I[g], I[g] = 0) : g ? I[g] = 9 ^ y : 0;
                  }
                  if (L > N || s > 1 && L == N && !h && Math.random() < .5) {
                    I[G] = O;
                    if (s > 1) {
                      if (h && c - L < 0) return y ^= 8, G--, L;
                      if (!h) i = n, B = O, b = p;
                    }
                    N = L;
                  }
                  n += J || (g = p, m = p < O ? g - 3 : g + 2, I[m] < z | I[
                  m + O - p] || I[p += p - O]) ? 1 : 0;
                }
              }
            }
          } while (!r & q > 2 || (p = O, q | A > 2 | o > z & !r && ++C * --A));
        }
      }
    } while (++O > 98 ? O = 20 : e - O);
    return y ^= 8, G--, N + M * M && N > -K + 1924 | d ? N : 0;
  }

  function O(){
    B = i = y = u = 0;
    while (B++ < 120) I[B - 1] = B % x ? B / x % x < 2 | B % x < 2 ? 7 : B / x & 4 ? 0 : l[i++] | 16 : 7;
    for (var a = "<table cellspacing=0 align=center border=0>", B = 0; B < 8; B++)
    for (a += "<tr>", i = 21; i < 29; i++) a += "<td width=40 height=40 onclick=toledoChess.Y(" + (B * x + i) + ") id=o" + (B * x + i) + " style='border:2px solid #e0e0f0' bgcolor=#" + (i + B & 1 ? "f0f" : "c0c") + "0f0 align=center>";
    a += "<tr><td colspan=8 align=center><select id=t><option>Q<option>R<option>B";
    !W.disabled && document.write(a + "<option>N</select></table>");
  }

  function W() {
    B = b;

    if(W.disabled){
      return;
    }

    for (var p = 21; p < 99; p += p % x - 8 ? 1 : 3) {
      document.getElementById("o" + p).
      innerHTML = "\xa0pknbrq  PKNBRQ".charAt(I[p] & z);
      document.getElementById("o" + p).
      style.borderColor = p == B ? "red" : "#e0e0f0";
    }
  }

  function Y(s) {
    i = (I[s] ^ y) & z;
    if (i > 8) {
      b = s;
      W();
    } else if (B && i < 9) {
      b = s;
      i = I[B] & z;
      if ((i & 7) == 1 & (b < 29 | b > 90)) i = 14 - 0 ^ y;
      X(0, 0, 0, 21, u, 1);
      if (y){ 
        setTimeout(function(){
          X(0,0,0,21,u,2/*ply*/); 
          X(0,0,0,21,u,1);
        },250);
        //window.setTimeout("X(0,0,0,21,u,2/*ply*/),X(0,0,0,21,u,1)", 250);
      }
    }
  }

  exports.makeMove = (function(){
    var files = { 'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8 },
        callback;

    function _(from, to, callback){
      var a = toLoc(from),
          b = toLoc(to);

      Y(toLoc(from)); 

      setTimeout(function(){
        callback && ( _.callback = function(from,to){
          callback({ 'from':toSAN(from), 'to':toSAN(to) });
        });
      },0);

      Y(toLoc(to)); 
    }

    function toLoc(san){
      var s = san.length == 3 && 1 || 0,
          f = san.charCodeAt(s)-96,
          r = 10-parseInt(san.substring(s+1,s+2));

      return r + '' + f;
    }

    function toSAN(loc){
      var r = 10-Math.floor(loc / 10),
          f = String.fromCharCode((loc % 10)+96);

      return f+r;
    }

    return _;
  })();

  exports.X = X;
  exports.Y = Y;
  exports.W = W;

  exports.init = function(){
    
    if(!W.disabled && document.body){
      document.body.innerHTML = '';
    }

    B, i, y, u, b, I = [];

    G = 120;
    x = 10;
    z = 15;
    M = 1e4;
    l = [5, 3, 4, 6, 2, 4, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 13, 11, 12, 14, 10, 12, 11, 13, 0, 99, 0, 306, 297, 495, 846, -1, 0, 1, 2, 2, 1, 0, -1, -1, 1, -10, 10, -11, -9, 9, 11, 10, 20, -9, -11, -10, -20, -21, -19, -12, -8, 8, 12, 19, 21];

    O();
    W();
  }

  return exports;

})({});

if(typeof module != 'undefined' && module.exports){
  module.exports = toledoChess;
}
