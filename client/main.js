// const a = document.createElement("a");
// let urls = [
//   "https://www.googleapis.com/drive/v3/files/1wTQh5ore0ASh4kO8piThMF-SueI0_1mO?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/11Vc8wRDZFHTdQ78jtpBbgDvpn5l1tdFd?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1-q4odWJzx-gEVQhhLKBGMyLysEbUtYbI?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1bHWuyTWNa5QtUOdKMVgPYmhlbe6XsnUL?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1ZdIZiKmcWnTd1qKndYWdMF00woaTl3_Z?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1YW1dZwWJqZnAwoeOHvHOAeKLqihrZEa1?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1dS_8CiwCqQcEfGn7-UH9yIA6e8XXhVCU?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1R6MUtKUr3zzn4r7KjEjteQASnojQvgxp?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/12-6Nk45Uuybx_mO4jfqUnlniOi11eYZm?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1Qe_TRxkldLp8kR-pkQifbK0iiJmfz9ML?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/19pFq1F1ROfMnA0MK8vvrOdnExA73JR31?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1laE7-_QJjd7O2uZLDnKdNzMnf6nSwDjC?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1g2F0psQoswg1MyFUzpaWU0dNidSyh-F5?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1JcGNbFlGNs9GM7YwpOj3KzBJhscVKlXl?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1jpMU-t1ORhd2ZLJXVvajvlOcP4yGhm1s?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1x_rplZb0pMuzzxpryqOsuYi2Fr1cgUNU?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1AllpeGIyo63UM5KhDUs-oajjvrSZiq0t?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1m5unQJ_x7PfEPV-arpPcfaeMa7F7SKK0?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1_Tn1pbaR66vdKpf5qlJuFXwxNcyUEUKb?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1JX-F2aeqHpiODcO93S3C_XNtRLwJhPzN?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1xF8G1ModAMtrb8Ou85zfOWG4L959WfIH?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1JUn4u-x8NxdCxWyJG5SZCnObxqA5PptF?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1l1W381EY3h2hNCqm92fVRRWvrCYg4UeV?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1u42zfe9A5F5UmxIzT1DA6IeFcyYiEiGu?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1MBo5WxJbVfY_X5bPrT1FP2VgsynRJFrf?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1hJkkqoYS6YZPot_Qn4RwVjfY-0xec72d?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1oIpS8LzHS4hIqPvDLHlhG9S5r2AXxnjH?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1AdN1PR2weRdQ-H1xU_xkQ3XOiRYR7hAU?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1cPxyuO3jiWScsta2MYyGd5FqjOklBsrN?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1sQjoHMf_0DM66uGu-HK3f5gkVTp5DXlk?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1LCjaeoJOe9KnNkURmz6tmKzsCNEJJutz?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1GxTDUZpdWK-sS3pACsLqHLkfLCoQ2Tbc?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1wMm7BUkLLTSJ6X99hCafdMvG7FE3FwRF?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1mq1Ywq4RPjOzA9-NuRjfnSiVOb2iRCJq?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1KO64iSAvCELPoek5iTs5BYkhrTYOzGrd?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1nn1BatoasALN6BbpXkpVAcklmGUtd4D7?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1wuCRfiIRDq35EyZavU5h9w4FOvTifOzM?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1gPjEi0x2VxKdA3HGfKIbcJNhaoZYjJcA?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1V7b_lNGySO5jdGx36nJL5Gra5eZhjCFv?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1glHmcV9xTuskuGS7Ion9VDiD4mqlm6YX?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1gTbmRNNS2o1EkpS1lXS_xWvnhcnaJIWm?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1in18jZdh1k9IfGjr_9R09Oul2p9VKpgv?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/16UxLLh1xyfjnmcF1v7GmLxLVHcqRiJF2?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1ZG-wAFGggN8NMlX3OuNceWaYxQebvxUv?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1_nu7NRNaGJbzEK11C4DKr74iOgDrUOoH?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1MGpU87-vMPt--S7rMAbGO9LSqb9qgZMS?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1KpdhNx4yvtfshLuwx19lLvxbcnjYXH-2?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1tPvUu2fOv3VaoEdVvQCvGWSQijjREUGO?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1jJUWv796xQYg8HLPbFqnjehcErcDp1Zw?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/11FrxJsTGv9XG5q-EDGzgXLvSgrCyrylo?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/13VPvwY5H-ds3ujqToI943RwJU42S7fu1?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1wqnGNx6JXurWAPboJ5u5iBC3eoam8BOJ?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1njXqzeN_hxKIx0Lz1aWZwikyTmlq19cw?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1BJIqELBrHfi9WCwGWPpJdHmfckXvnZ9W?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/177KaexQ-E_SBG4KUfni1LAz_hjX3pCHt?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1PHfobwZJOIYAiU-PbXVwuzjJJCRU9LUP?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1jzqUtXRVUQ7mEdz93qOJ8tdKsTmS3pX0?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/13H79DtqfyUnmXSjTEXbtb8DWMWWFP7DL?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1xydf5P7ZgU5EC0P20nVvLWWFmSwSmp_G?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1MtnCSU0ALqSJ4nu3NAKCsx_MOJ1ExeJx?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1D_uW1ACTXJJhle9XZX1UNkxFmMV43N1L?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1W3qASOny13pZ25naBLkxwewhbC7cCxlK?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1YTjIXuonTm-tAma77jXVpQhU4LWd7R2o?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1XTR7KwuR9CxRzvJ5dS43rEOPyprr8lQn?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/17yN9gpzefVBZxF0VQllAjSAVLSYKaQzG?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1FH-fN1lG-CDtYZfZyqDKV6qeh3VLsVDP?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/19AV6uOIxOmd59ehlkVNxlD6jBZtY2op5?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1dK71FHJeOGp7tvhSUDSLdFLHa_CT9wKv?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1i8EUeAoL-fl_PqijKdm7_VTCDHzqt5XY?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1RMIvvAOP1Akm8PJvrbfj_YJP709seFSh?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1CWc_KyRx4UAMrRZg5n-6sps2liqXcYgi?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1o_POo4wYLW_bolLhI1GaPI4AbvYAmA-W?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1LcG2wBnAwFTd1WfqZYRnyT7ZWZj84kLe?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1EJZfFsL9KUkcGfM6xeqFQx0M4UlypHJl?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1qVguH0VHGNdAu8SOvkQZe3a5XXBmPHVG?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1BgWio3fA_rFX2QLeEE2mshvGelWsust8?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/18qps6RUlVoMsVK6SwiVIc5nDUlpuRWIW?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1H8pdVw4B6Ku4zfqMSF7qbLIRYOWBK1ak?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/15YI0WA9SDC-_RCeidB1RLZmucvtC-J_H?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1dz-C9eZWu1pSVeJKEG6m2MoXQxUb-oPO?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1nkqb_n9KxCRVS1jpi_ZVeZnujfsbv-JK?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1tbsW33bfb6bVpOEifnKGrXHqFpUjnuwv?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/196_F7hpQ-JMClk2tLuNFUWa6KNqonhF9?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1JozXybNgJv-F7QDOsyEp-vbgr7exbzwU?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/17-scwaLBV3tQBMwyPqevu6DePG3DquKu?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1Pytmm3HvyP8HU1j0Pw8Ak7ibV-mOiyNv?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1vIOCag3gQySgqx023tMJVTuhFVHO-TX4?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1bKp6h7QP5hMjkxRtpdbGDwqPZOrP5Nsu?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/17h8-h6qRWjUyHdLY0x93bA37xLPHoCiQ?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1_YhrBixbTGWnB3lN9rDQSf7MAcs-6uxe?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1sfPiSTt26pF7jzCj_xY6_5dwDm2bvDl4?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1_93sG1gZAdDNKiqzTyUvs80IeIm-dnAJ?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1OSwbLwWUFPLVp0FzG-bUgcn9vpLhpPf8?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1iPC38TpLK-sR1dPG9C59d3604KgbxOW9?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/12H2kzTEi8AJyMocAv_pZCTfRHoe23I8_?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1E1eqTZ80Z9xvB3E3PrYLtjMN-vd8jpWa?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1_lZhkeJkS_REWnQgwf8ruaA_apFApNvk?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1sUg69N_cZEQaZLzE3DcpH0jQGDR6h31v?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1eAbyKWmnfW1NQtA5uQ2ws2hp4aThAUSI?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1XBAJQwE9QHbmZjdb93uxeUkATO3VVMxv?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1Pa16Rps6R3X274s9voUcmb2irInAyA0f?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1PNBzonvSUdD_FWuJ1JytfxYYN7aZtp1T?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1zC3fmxMETX2wDqx_JySoyXlCwvRf_2z7?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/153QU8S_mG0W501lqXhBqW88IbtvZ1u1Y?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1Lm4iBg5tTHu4egfwzPdgFxgOWiLBGj1s?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1mbfd6SN4fu2dsazWSxWOICBXKjrcfiQ2?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1QnxlYUFk03qEm6E290y5SRnEd5BugoUL?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1lxvKO_ywQv8aHVvFVD5wuM_KHM5Sqdya?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1GhE5rI2jpqShxc3OVqJkxxRUWha1s8tH?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1ybsr8Fa5EXPdjawVAf0uA3PKqZUuEne0?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1DtdYAFP1QqBlBRS3E6eQL4wPc9lD4htG?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1KROXkYR7ff9S_xl_-zWdWBLqzylmwm2k?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1u1MbLyH3-AQe5qlmlFOfliBha7icu6QI?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1cqrXUtmtX8J2MDSULsGL64GfRHvcfq4v?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1pUPU5QcBOU4Qol6TASvIv3Lv0Vw3aIgO?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/16_TdErlh9aTi740e8IqNRsvLEyquwnN2?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1LYP1eo0dwW59aad0qzjBty6T-IDJ19u3?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1eNc77RhgnC7FFxeFbmsogvgPCLQ3jTE7?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1Kkka_5uG8DoO3Ene7wMdNqTAA2WObiPf?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/17nb_5UK7g8pHHf9YQeR2MaehwM3LAFO-?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1wW9498jVOf7O9Z79xAqeR-xOfHaM_lOA?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1ki_3NZV5zX6XiJgN_0tXsS0TZoADP1pk?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1x2oHHA76wn0s2us9xt19yvf_96V_wAcy?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1tKpHoCc5MiaJBpe6P585FDSAsjepdJRh?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1E7RHvbQXw_LCVJ_6gJXc_Q6NmgLxkxQy?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1tphuNX-PzSZyuu18nnsEpfJztCyZKSXV?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
//   "https://www.googleapis.com/drive/v3/files/1vn6X_TdHSSpRdh7W_v7Bns7zaTTVkTis?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0",
// ];
// let = server = [];
// let text = "app.use('xxx',initiate('yyy'))";

// for (let a = 0; a < 127; ++a) {
//   server.push(
//     text.replace("xxx", `/video${a}`).replace("yyy", urls[a])
//   );
// }
// let blob = new Blob([server], { type: "plain/text" });
// let url = URL.createObjectURL(blob);
// a.href = url;
// a.download = "fileName.txt";
// a.click();

var video = document.getElementById("video");
var videoSrc = "./server";
if (Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource(videoSrc);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = videoSrc;
  video.addEventListener("loadedmetadata", function () {
    video.play();
  });
}